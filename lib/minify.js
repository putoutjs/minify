import {print} from '@putout/printer';
import {parse, transform} from 'putout';
import {getFirstPassOptions} from './plugins.js';

export const minify = (source, options = {}) => {
    const ast = parse(source);
    const {quote = `'`} = options;
    
    transform(ast, source, getFirstPassOptions(options));
    
    const code = print(ast, {
        format: {
            newline: '',
            space: '',
            indent: '',
            splitter: ' ',
            endOfFile: '',
            quote,
        },
        semantics: {
            comments: false,
            roundBraces: false,
            encodeDoubleQuotes: true,
            encodeSingleQuotes: true,
        },
    });
    
    return code
        .replaceAll(',}', '}')
        .replaceAll(',]', ']')
        .replaceAll(';}', '}');
};
