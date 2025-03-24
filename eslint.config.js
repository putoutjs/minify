import {safeAlign} from 'eslint-plugin-putout';
import {matchToFlat} from '@putout/eslint-flat';
import {defineConfig} from 'eslint/config';

export default defineConfig([safeAlign, matchToFlat({
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
