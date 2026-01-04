import {resolve} from 'node:path';
import {createRequire} from 'node:module';
import process from 'node:process';
import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import replace from '@rollup/plugin-replace';
import alias from '@rollup/plugin-alias';
import {bundleStats} from 'rollup-plugin-bundle-stats';

const require = createRequire(import.meta.url);

const createReplacement = (a) => ({
    find: `node:${a}`,
    replacement: a,
});

const {STATS} = process.env;

export default {
    input: 'lib/minify.js',
    output: {
        file: 'bundle/minify.js',
        format: 'es',
    },
    plugins: [
        alias({
            entries: [{
                find: 'fullstore',
                replacement: resolve('./stub/fullstore.js'),
            }, {
                find: './loader.mjs',
                replacement: './stub/loader.js',
            }, {
                find: 'chalk',
                replacement: './stub/chalk.js',
            }, {
                find: 'acorn-stage3',
                replacement: new URL('./stub/acorn-stage3.js', import.meta.url).pathname,
            }, {
              find: 'obug',
                replacement: new URL('./stub/debug.js', import.meta.url).pathname,
            },
            ...[
                'process',
                'module',
                'path',
            ].map(createReplacement)],
        }),
        commonjs({
            strictRequires: 'auto',
            defaultIsModuleExports: 'auto',
            exclude: [
                'os',
                'path',
                'fs',
                'module',
                'buffer',
                '**/parse-options/**',
            ],
            ignore: [
                'tenko',
                'hermes-parser',
                'esprima',
                'espree',
                'acorn',
                'hermes-parser/*',
                'core-js/**',
                '**/lib/loader.*',
                'caniuse',
                'hermes*',
                'electron*',
                'node-releases',
            ],
        }),
        nodeResolve({
            preferBuiltins: false,
            browser: true,
        }),
        nodePolyfills(),
        json(),
        replace({
            preventAssignment: true,
            values: {
                'process.env.BABEL_TYPES_8_BREAKING': true,
                'Buffer.isBuffer': 'Array.isArray',
                'process.platform': '"unix"',
                'process.env.BABEL_TYPES_8_BREAKING = true': '',
                'process.env': '{}',
                'export {load} from "./loader.mjs"': '',
            },
        }),
        ...STATS ? [bundleStats()] : [],
    ],
};
