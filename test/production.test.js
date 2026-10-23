import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { parse } from 'parse5';

const root = fileURLToPath(new URL('.', import.meta.url));
const output = resolve(root, '../dist');
const origin = 'https://jgoh.io';

function* elements(node) {
    if (node.tagName) yield node;
    for (const child of node.childNodes ?? []) yield* elements(child);
}

function attributes(node) {
    return Object.fromEntries(node.attrs.map(({ name, value }) => [name, value]));
}

const pages = (await readdir(resolve(root, '..'))).filter((file) => file.endsWith('.html'));

for (const page of pages) {
    test(`${page}: production page and all linked local files exist`, async () => {
        const html = await readFile(resolve(output, page), 'utf8');
        const nodes = [...elements(parse(html))];
        assert.equal(nodes.filter((node) => node.tagName === 'h1').length, 1, 'One page heading is required');
        for (const node of nodes) {
            const attrs = attributes(node);
            const urls = [];
            if (attrs.src) urls.push(attrs.src);
            if (attrs.href) urls.push(attrs.href);
            if (attrs.property === 'og:image') urls.push(attrs.content);
            for (const value of urls) {
                const url = new URL(value, `${origin}/${page}`);
                if (url.origin !== origin) continue;
                const pathname = decodeURIComponent(url.pathname);
                const file = resolve(output, `.${pathname === '/' ? '/index.html' : pathname}`);
                assert.ok((await stat(file)).isFile(), `${page} references missing file ${value}`);
            }
            if (node.tagName === 'img') assert.ok(attrs.alt?.trim(), `${page}: image needs alt text`);
        }
    });
}

test('The published CV and model contain real file data', async () => {
    const cv = await readFile(resolve(output, 'documents/cv_UXR_111323.pdf'));
    assert.equal(cv.subarray(0, 5).toString(), '%PDF-');
    const model = await readFile(resolve(output, 'donut.glb'));
    assert.equal(model.subarray(0, 4).toString(), 'glTF');
});
