import {
    parse,
    transformAsync,
} from 'putout';
import {print} from '@putout/printer';
import {
    getPlugins,
    getAfterTransform,
    getThirdPassPlugins,
} from './plugins.js';

export const minify = async (source, options) => {
    const ast = parse(source, {
        printer: 'putout',
    });
    
    await transformAsync(ast, source, {
        rules: {
            'conditions/apply-if': 'off',
            'conditions/convert-equal-to-strict-equal': 'off',
        },
        plugins: getPlugins(options),
    });
    
    await transformAsync(ast, source, getAfterTransform(options));
    await transformAsync(ast, source, getThirdPassPlugins(options));
    
    const code = print(ast, {
        format: {
            newline: '',
            space: '',
            indent: '',
            splitter: ' ',
            roundBraceOpen: '',
            roundBraceClose: '',
        },
        semantics: {
            comments: false,
        },
    });
    
    return code
        .replaceAll(',}', '}')
        .replaceAll(',]', ']')
        .replaceAll(';}', '}');
};
