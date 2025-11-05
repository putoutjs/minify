import {
    parse,
    transform,
    print,
} from '@putout/bundle/slim';
import {getFirstPassOptions} from './plugins.js';

export const minify = (source, options = {}) => {
    const ast = parse(source);
    const {quote = `'`} = options;
    
    transform(ast, source, getFirstPassOptions(options));
    
    const code = print(ast, {
        printer: ['putout', {
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
                trailingComma: false,
                encodeDoubleQuotes: true,
                encodeSingleQuotes: true,
            },
        }],
    });
    
    return code.replaceAll(';}', '}');
};
