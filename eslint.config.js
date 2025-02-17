import {safeAlign} from 'eslint-plugin-putout/config';
import {
    matchToFlat,
    createESLintConfig,
} from '@putout/eslint-flat';

export default createESLintConfig([safeAlign, matchToFlat({
    '**/fixture/*.js': {
        'arrow-parens': ['error', 'as-needed'],
        '@stylistic/js/no-extra-parens': 'off',
        'prefer-arrow-callback': 'off',
    },
    '**/*-fix.*': {
        '@stylistic/js/quotes': 'off',
        '@stylistic/js/eol-last': 'off',
        '@stylistic/js/space-infix-ops': 'off',
    },
})]);
