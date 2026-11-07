import process from 'node:process';
import {rspack} from '@rspack/core';
import {RsdoctorRspackPlugin} from '@rsdoctor/rspack-plugin';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

const {STATS} = process.env;

const resolve = (a) => new URL(a, import.meta.url).pathname;

export default {
    mode: 'production',
    entry: resolve('./lib/minify.js'),
    target: 'web',
    experiments: {
        outputModule: true,
    },
    output: {
        path: resolve('./bundle'),
        filename: 'minify.js',
        module: true,
        chunkFormat: 'module',
        library: {
            type: 'module',
        },
    },
    optimization: {
        minimize: false,
        concatenateModules: true,
    },
    resolve: {
        mainFields: ['browser', 'module', 'main'],
        conditionNames: ['browser', 'import', 'default'],
        alias: {
            'tenko': false,
            'hermes-parser': false,
            'esprima': false,
            'espree': false,
            'acorn': false,
            'module$': resolve('./stub/module.js'),
            'chalk': resolve('./stub/chalk.js'),
            'acorn-stage3': resolve('./stub/acorn-stage3.js'),
            'obug': resolve('./stub/debug.js'),
            // browser field points to index.dom.js that needs `document`
            'decode-named-character-reference$': import.meta.resolve('decode-named-character-reference').replace('file://', ''),
        },
    },
    plugins: [
        new rspack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
            resource.request = resource.request.slice('node:'.length);
        }),
        new NodePolyfillPlugin(),
        new rspack.DefinePlugin({
            'process.env.BABEL_TYPES_8_BREAKING': 'true',
        }),
        ...STATS ? [
            new RsdoctorRspackPlugin({
                disableClientServer: true,
                output: {
                    mode: 'brief',
                    options: {
                        type: ['html'],
                    },
                },
            }),
        ] : [],
    ],
    stats: 'errors-only',
};
