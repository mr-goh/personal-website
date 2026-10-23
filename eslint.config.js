import js from '@eslint/js';
import globals from 'globals';

export default [
    { ignores: ['dist/**', 'node_modules/**'] },
    js.configs.recommended,
    {
        files: ['*.js'],
        languageOptions: { globals: globals.browser },
        rules: {
            eqeqeq: 'error',
            'no-var': 'error',
            'prefer-const': 'error',
        },
    },
    {
        files: ['test/**/*.js', 'vite.config.js', 'eslint.config.js'],
        languageOptions: { globals: globals.node },
    },
];
