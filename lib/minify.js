import {
    parse,
    transform,
} from 'putout';
import {print} from '@putout/printer';

export const minify = (source) => {
    const ast = parse(source, {
        printer: 'putout',
    });
    
    transform(ast, source, {
        plugins: [
            'babel/transform-block-scoping',
            'babel/transform-merge-sibling-variables',
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

