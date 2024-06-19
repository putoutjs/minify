import * as minifyPlugin from '@putout/plugin-minify';
import mergeDestructuringProperties from '@putout/plugin-merge-destructuring-properties';
import declare from '@putout/plugin-declare';
import applyOptionalChaining from '@putout/plugin-apply-optional-chaining';
import applyTemplateLiteralsPlugins from '@putout/plugin-apply-template-literals';
import conditionsPlugins from '@putout/plugin-conditions';
import convertToArrowFunction from '@putout/plugin-convert-to-arrow-function';
import convertArgumentsToRest from '@putout/plugin-convert-arguments-to-rest';
import removeConsolePlugin from '@putout/plugin-remove-console';
import removeUnusedVariablesPlugin from '@putout/plugin-remove-unused-variables';
import removeUnreachableCode from '@putout/plugin-remove-unreachable-code';
import removeDebugger from '@putout/plugin-remove-debugger';
import removeEmpty from '@putout/plugin-remove-empty';
import removeUselessSpreadPlugin from '@putout/plugin-remove-useless-spread';
import removeUselessVariables from '@putout/plugin-remove-useless-variables';
import removeUselessReturn from '@putout/plugin-remove-useless-return';
import removeUselessElse from '@putout/plugin-remove-useless-else';
import removeUnusedExpressions from '@putout/plugin-remove-unused-expressions';
import removeUnreferencedVariables from '@putout/plugin-remove-unreferenced-variables';
import reuseDuplicateInit from '@putout/plugin-reuse-duplicate-init';
import simplifyTernary from '@putout/plugin-simplify-ternary';
import mergeDuplicateFunctions from '@putout/plugin-merge-duplicate-functions';
import mergeDuplicateImports from '@putout/plugin-merge-duplicate-imports';
import forOf from '@putout/plugin-for-of';
import removeNestedBlocks from '@putout/plugin-remove-nested-blocks';
import logicalExpressions from '@putout/plugin-logical-expressions';
import newPlugin from '@putout/plugin-new';
import regexp from '@putout/plugin-regexp';
import promises from '@putout/plugin-promises';
import types from '@putout/plugin-types';

export const parseOptions = (options) => ({
    applyTemplateLiterals: true,
    conditions: false,
    removeUnusedVariables: false,
    removeConsole: false,
    removeUselessSpread: true,
    mangleClassNames: true,
    mangle: false,
    mergeVariables: true,
    convertStrictEqualToEqual: false,
    ...options,
});

export const getFirstPassOptions = (options) => {
    const {
        conditions,
        removeUnusedVariables,
        removeConsole,
        removeUselessSpread,
        applyTemplateLiterals,
        convertStrictEqualToEqual,
        mangle,
        mangleClassNames,
        mergeVariables,
    } = parseOptions(options);
    
    const plugins = [
        applyTemplateLiterals && ['apply-template-literals', applyTemplateLiteralsPlugins],
        ['apply-optional-chaining', applyOptionalChaining],
        conditions && ['conditions', conditionsPlugins],
        ['convert-to-arrow-function', convertToArrowFunction],
        ['convert-arguments-to-rest', convertArgumentsToRest],
        ['declare', declare],
        ['for-of', forOf],
        ['regexp', regexp],
        removeUnusedVariables && ['remove-unused-variables', removeUnusedVariablesPlugin],
        ['remove-unreachable-code', removeUnreachableCode],
        ['remove-debugger', removeDebugger],
        ['remove-empty', removeEmpty],
        removeUselessSpread && ['remove-useless-spread', removeUselessSpreadPlugin],
        ['remove-useless-return', removeUselessReturn],
        ['remove-useless-else', removeUselessElse],
        ['remove-useless-variables', removeUselessVariables],
        ['remove-unused-expressions', removeUnusedExpressions],
        ['remove-unreferenced-variables', removeUnreferencedVariables],
        ['remove-nested-blocks', removeNestedBlocks],
        removeConsole && ['remove-console', removeConsolePlugin],
        ['reuse-duplicate-init', reuseDuplicateInit],
        ['logical-expressions', logicalExpressions],
        ['merge-destructuring-properties', mergeDestructuringProperties],
        ['merge-duplicate-functions', mergeDuplicateFunctions],
        ['merge-duplicate-imports', mergeDuplicateImports],
        ['new', newPlugin],
        ['simplify-ternary', simplifyTernary],
        ['types', types],
        ['promises', promises],
        ['minify', minifyPlugin],
    ].filter(Boolean);
    
    return {
        rules: {
            ...conditions && {
                'conditions/apply-if': 'off',
                'conditions/convert-equal-to-strict-equal': 'off',
            },
            'promises/add-missing-await': 'off',
            'minify/mangle-names': [
                mangle, {
                    mangleClassNames,
                },
            ],
            'minify/merge-variables': mergeVariables,
            'minify/convert-strict-equal-to-equal': convertStrictEqualToEqual,
        },
        plugins,
    };
};
