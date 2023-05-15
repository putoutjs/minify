import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import replace from '@rollup/plugin-replace';
import alias from '@rollup/plugin-alias';

export default {
    input: 'lib/minify.js',
    output: {
        file: 'bundle/minify.js',
        format: 'es',
    },
    plugins: [
        alias({
            entries: [{
                find: './loader.mjs',
                replacement: './stub/loader.js',
            }, {
                find: 'chalk',
                replacement: './stub/chalk.js',
            }],
        }),
        commonjs({
            defaultIsModuleExports: false,
            dynamicRequireTargets: [
                'node_modules/@putout/plugin-minify/lib/*',
                '!node_modules/@putout/plugin-minify/lib/index.js',
                'node_modules/@putout/plugin-remove-empty/lib/*',
                '!node_modules/@putout/plugin-remove-empty/lib/index.js',
                'node_modules/@putout/plugin-remove-useless-spread/lib/*',
                '!node_modules/@putout/plugin-remove-useless-spread/lib/index.js',
            ],
            exclude: [
                'core-js/**',
                '**/lib/loader.*',
                '**/parse-options/**',
                'acorn',
                'tenko*',
                'hermes-parser/*',
                'acorn-stage-3',
                'caniuse',
                'esprima',
                'hermes*',
                'espree',
                'electron*',
                'node-releases',
                'os',
                'path',
                'fs',
                'module',
                'buffer',
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
    ],
};
