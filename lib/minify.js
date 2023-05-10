import {
    parse,
    transform,
} from 'putout';
import {print} from '@putout/printer';
import * as minifyPlugin from './minify/index.js';

const parseOptions = (options) => ({
    removeUnusedVariables: true,
    removeConsole: false,
    ...options,
});

export const minify = (source, options) => {
    const {
        removeUnusedVariables,
        removeConsole,
    } = parseOptions(options);
    
    const ast = parse(source, {
        printer: 'putout',
    });
    
    const plugins = [
        'apply-template-literals',
        'babel/transform-block-scoping',
        'babel/transform-merge-sibling-variables',
        'babel/transform-minify-booleans',
        'babel/transform-undefined-to-void',
        'babel/minify-infinity',
        'babel/minify-type-constructors',
        'babel/minify-guarded-expressions',
        'babel/minify-dead-code-elimination',
        'merge-duplicate-functions',
        removeUnusedVariables && 'remove-unused-variables',
        'remove-unreachable-code',
        'remove-debugger',
        'remove-empty',
        'remove-useless-spread',
        'remove-useless-return',
        'remove-unused-expressions',
        removeConsole && 'remove-console',
        ['minify', minifyPlugin],
    ].filter(Boolean);
    
    transform(ast, source, {
        plugins,
    });
    
    const code = print(ast, {
        format: {
            newline: '',
            space: '',
            indent: '',
            comments: false,
        },
    });
    
    return code;
};

