import * as minifyPlugin from '@putout/plugin-minify';
import * as mergeDestructuringProperties from '@putout/plugin-merge-destructuring-properties';
import * as declare from '@putout/plugin-declare';
import * as applyOptionalChaining from '@putout/plugin-apply-optional-chaining';
import * as applyTemplateLiteralsPlugins from '@putout/plugin-apply-template-literals';
import * as conditionsPlugins from '@putout/plugin-conditions';
import * as convertToArrowFunction from '@putout/plugin-convert-to-arrow-function';
import * as convertArgumentsToRest from '@putout/plugin-convert-arguments-to-rest';
import * as removeConsolePlugin from '@putout/plugin-remove-console';
import * as removeUnusedVariablesPlugin from '@putout/plugin-remove-unused-variables';
import * as removeUnreachableCode from '@putout/plugin-remove-unreachable-code';
import * as removeDebugger from '@putout/plugin-remove-debugger';
import * as removeEmpty from '@putout/plugin-remove-empty';
import * as removeUselessSpreadPlugin from '@putout/plugin-remove-useless-spread';
import * as removeUselessVariables from '@putout/plugin-remove-useless-variables';
import * as pluginReturn from '@putout/plugin-return';
import * as removeUselessElse from '@putout/plugin-remove-useless-else';
import * as removeUnusedExpressions from '@putout/plugin-remove-unused-expressions';
import * as removeUnreferencedVariables from '@putout/plugin-remove-unreferenced-variables';
import * as reuseDuplicateInit from '@putout/plugin-reuse-duplicate-init';
import * as simplifyTernary from '@putout/plugin-simplify-ternary';
import * as mergeDuplicateFunctions from '@putout/plugin-merge-duplicate-functions';
import * as mergeDuplicateImports from '@putout/plugin-esm/merge-duplicate-imports';
import * as forOf from '@putout/plugin-for-of';
import * as removeNestedBlocks from '@putout/plugin-remove-nested-blocks';
import * as logicalExpressions from '@putout/plugin-logical-expressions';
import * as newPlugin from '@putout/plugin-new';
import * as regexp from '@putout/plugin-regexp';
import * as promises from '@putout/plugin-promises';
import * as types from '@putout/plugin-types';

export const parseOptions = (options) => ({
    applyTemplateLiterals: true,
    conditions: false,
    removeUnusedVariables: false,
    removeConsole: false,
    removeUselessSpread: true,
    mangleClassNames: true,
    mangle: true,
    mergeVariables: true,
    convertStrictEqualToEqual: false,
    fixCount: 1,
    ...options,
});

export const getFirstPassOptions = (options) => {
    const {
        fixCount,
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
        ['return/remove-useless', pluginReturn.rules['remove-useless']],
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
        ['merge-duplicate-import * as s', mergeDuplicateImports],
        ['new', newPlugin],
        ['simplify-ternary', simplifyTernary],
        ['types', types],
        ['promises', promises],
        ['minify', minifyPlugin],
    ].filter(Boolean);
    
    return {
        fixCount,
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
