import assert from 'node:assert/strict';
import { afterEach, test } from 'node:test';
import { createCarousel } from '../carousel.js';

// Only the DOM surface used by the carousel is needed for these interaction tests.
class Element extends EventTarget {
    attributes = new Map();
    src = '';
    alt = '';

    setAttribute(name, value) {
        this.attributes.set(name, value);
    }

    getAttribute(name) {
        return this.attributes.get(name);
    }

    closest() {
        return this.container;
    }
}

function setup() {
    const elements = Object.fromEntries(['previous', 'next', 'image', 'container'].map((id) => [id, new Element()]));
    elements.image.container = elements.container;
    globalThis.document = { getElementById: (id) => elements[id] };
    createCarousel([
        { src: '/one.png', alt: 'First slide' },
        { src: '/two.png', alt: 'Second slide' },
        { src: '/three.png', alt: 'Third slide' },
    ], 'previous', 'next', 'image');
    return elements;
}

afterEach(() => {
    delete globalThis.document;
});

test('Clicking through a carousel updates images, descriptions, and boundaries', () => {
    const { previous, next, image } = setup();
    assert.equal(image.src, '/one.png');
    assert.equal(previous.getAttribute('aria-disabled'), 'true');
    previous.dispatchEvent(new Event('click'));
    assert.equal(image.src, '/one.png');

    next.dispatchEvent(new Event('click'));
    assert.equal(image.src, '/two.png');
    assert.equal(image.alt, 'Second slide');
    assert.equal(previous.getAttribute('aria-disabled'), 'false');

    next.dispatchEvent(new Event('click'));
    assert.equal(image.src, '/three.png');
    assert.equal(next.getAttribute('aria-disabled'), 'true');
    next.dispatchEvent(new Event('click'));
    assert.equal(image.src, '/three.png');
    previous.dispatchEvent(new Event('click'));
    assert.equal(image.src, '/two.png');
});

test('Arrow keys change slides without scrolling the surrounding page', () => {
    const { container, image } = setup();
    for (const key of ['ArrowRight', 'ArrowLeft']) {
        const event = new Event('keydown', { cancelable: true });
        Object.defineProperty(event, 'key', { value: key });
        container.dispatchEvent(event);
        assert.equal(event.defaultPrevented, true);
        assert.equal(image.src, key === 'ArrowRight' ? '/two.png' : '/one.png');
    }
});

test('Missing carousel markup does not break other page scripts', () => {
    globalThis.document = { getElementById: () => null };
    assert.doesNotThrow(() => createCarousel([{ src: '/one.png', alt: 'First slide' }], 'prev', 'next', 'image'));
});
