import {
    parse,
    transform,
} from 'putout';
import {print} from '@putout/printer';
import {getPlugins} from './plugins.js';

export const minify = (source, options) => {
    const ast = parse(source, {
        printer: 'putout',
    });
    
    transform(ast, source, {
        plugins: getPlugins(options),
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

