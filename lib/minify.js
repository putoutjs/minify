import {
    parse,
    transform,
} from 'putout';
import {print} from '@putout/printer';
import {
    getPlugins,
    getAfterTransformPlugins,
} from './plugins.js';

export const minify = (source, options) => {
    const ast = parse(source, {
        printer: 'putout',
    });
    
    transform(ast, source, {
        plugins: getPlugins(options),
    });
    
    transform(ast, source, {
        plugins: getAfterTransformPlugins(),
    });
    
    const code = print(ast, {
        format: {
            newline: '',
            space: '',
            indent: '',
            comments: false,
            splitter: ' ',
            roundBraceOpen: '',
            roundBraceClose: '',
        },
    });
    
    return code
        .replaceAll(',}', '}')
        .replaceAll(',]', ']')
        .replaceAll(';}', '}');
};

