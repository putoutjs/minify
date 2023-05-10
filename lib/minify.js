import {
    parse,
    transform,
} from 'putout';
import {print} from '@putout/printer';
import * as minifyPlugin from './minify/index.js';

const parseOptions = (options) => ({
    removeUnusedVariables: true,
    ...options,
});

export const minify = (source, options) => {
    const {removeUnusedVariables} = parseOptions(options);
    
    const ast = parse(source, {
        printer: 'putout',
    });
    
    const plugins = [
        'babel/transform-block-scoping',
        'babel/transform-merge-sibling-variables',
        'babel/transform-minify-booleans',
        'babel/transform-undefined-to-void',
        'babel/minify-infinity',
        'babel/minify-type-constructors',
        'babel/minify-guarded-expressions',
        'babel/minify-dead-code-elimination',
        removeUnusedVariables && 'remove-unused-variables',
        'remove-debugger',
        'merge-duplicate-functions',
        'remove-empty',
        'remove-useless-spread',
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

