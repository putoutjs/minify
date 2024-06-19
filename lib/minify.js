import {print} from '@putout/printer';
import {parse, transform} from 'putout';
import {getFirstPassOptions} from './plugins.js';

export const minify = (source, options = {}) => {
    const ast = parse(source);
    
    transform(ast, source, getFirstPassOptions(options));
    
    const code = print(ast, {
        format: {
            newline: '',
            space: '',
            indent: '',
            splitter: ' ',
            endOfFile: '',
        },
        semantics: {
            comments: false,
            roundBraces: false,
        },
    });
    
    return code
        .replaceAll(',}', '}')
        .replaceAll(',]', ']')
        .replaceAll(';}', '}');
};
