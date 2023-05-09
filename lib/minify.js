import {
    parse,
    transform,
} from 'putout';
import {print} from '@putout/printer';
import * as minifyPlugin from './minify/index.js';

export const minify = (source) => {
    const ast = parse(source, {
        printer: 'putout',
    });
    
    transform(ast, source, {
        plugins: [
            'babel/transform-block-scoping',
            'babel/transform-merge-sibling-variables',
            'babel/transform-minify-booleans',
            'babel/transform-undefined-to-void',
            'babel/minify-infinity',
            'babel/minify-type-constructors',
            'babel/minify-guarded-expressions',
            'babel/minify-dead-code-elimination',
            
            'remove-unused-variables',
            'remove-debugger',
            ['minify', minifyPlugin],
        ],
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

