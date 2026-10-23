import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
    base: '/',
    build: {
        rolldownOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                projects: resolve(__dirname, 'projects.html'),
                contact: resolve(__dirname, 'contact.html'),
                compendium: resolve(__dirname, 'compendium.html'),
                objectDonut: resolve(__dirname, 'objectDonut.html'),
                projectThesis: resolve(__dirname, 'projectThesis.html'),
                projectGrocery: resolve(__dirname, 'projectGrocery.html'),
                projectItaly: resolve(__dirname, 'projectItaly.html'),
                projectML: resolve(__dirname, 'projectML.html'),
                projectOptum: resolve(__dirname, 'projectOptum.html'),
                projectRefugee:resolve(__dirname, 'projectRefugee.html'),
            },
        },
    },
});
