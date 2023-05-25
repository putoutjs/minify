import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import replace from '@rollup/plugin-replace';
import alias from '@rollup/plugin-alias';

const nestedPlugin = (name) => [
    `node_modules/@putout/plugin-${name}/lib/*`,
    `!node_modules/@putout/plugin-${name}/lib/index.js`,
];

const PUTOUT_NESTED_PLUGINS = [
    'conditions',
    'for-of',
    'logical-expressions',
    'minify',
    'new',
    'regexp',
    'remove-empty',
    'remove-useless-spread',
].flatMap(nestedPlugin);

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
            dynamicRequireTargets: PUTOUT_NESTED_PLUGINS,
            exclude: [
                'os',
                'path',
                'fs',
                'module',
                'buffer',
            ],
            ignore: [
                'hermes-parser',
                'esprima',
                'recast',
                'acorn-stage-3',
                'espree',
                'acorn',
                'tenko*',
                'hermes-parser/*',
                'core-js/**',
                '**/lib/loader.*',
                '**/parse-options/**',
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
    ],
};
