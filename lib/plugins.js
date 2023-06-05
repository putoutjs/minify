import minifyPlugin from '@putout/plugin-minify';
import mergeDestructuringProperties from '@putout/plugin-merge-destructuring-properties';
import declare from '@putout/plugin-declare';
import applyTemplateLiterals from '@putout/plugin-apply-template-literals';
import applyOptionalChaining from '@putout/plugin-apply-optional-chaining';
import convertToArrowFunction from '@putout/plugin-convert-to-arrow-function';
import convertArgumentsToRest from '@putout/plugin-convert-arguments-to-rest';
import removeConsolePlugin from '@putout/plugin-remove-console';
import removeUnusedVariablesPlugin from '@putout/plugin-remove-unused-variables';
import removeUnreachableCode from '@putout/plugin-remove-unreachable-code';
import removeDebugger from '@putout/plugin-remove-debugger';
import removeEmpty from '@putout/plugin-remove-empty';
import removeUselessSpread from '@putout/plugin-remove-useless-spread';
import removeUselessReturn from '@putout/plugin-remove-useless-return';
import removeUselessElse from '@putout/plugin-remove-useless-else';
import removeUnusedExpressions from '@putout/plugin-remove-unused-expressions';
import removeUnreferencedVariables from '@putout/plugin-remove-unreferenced-variables';
import reuseDuplicateInit from '@putout/plugin-reuse-duplicate-init';
import mergeDuplicateFunctions from '@putout/plugin-merge-duplicate-functions';
import forOf from '@putout/plugin-for-of';
import removeNestedBlocks from '@putout/plugin-remove-nested-blocks';
import logicalExpressions from '@putout/plugin-logical-expressions';
import conditions from '@putout/plugin-conditions';
import newPlugin from '@putout/plugin-new';
import regexp from '@putout/plugin-regexp';
import types from '@putout/plugin-types';

const parseOptions = (options) => ({
    removeUnusedVariables: true,
    removeConsole: false,
    mangleClassNames: true,
    ...options,
});

export const getAfterTransform = (options) => {
    const {mangleClassNames} = parseOptions(options);
    
    return {
        rules: {
            'minify/mangle-names': ['on', {
                mangleClassNames,
            }],
        },
        plugins: [
            ['minify', minifyPlugin],
        ],
    };
};

export const getPlugins = (options) => {
    const {
        removeUnusedVariables,
        removeConsole,
    } = parseOptions(options);
    
    const shortenNames = minifyPlugin.rules['shorten-names'];
    
    const plugins = [
        ['apply-template-literals', applyTemplateLiterals],
        ['apply-optional-chaining', applyOptionalChaining],
        ['conditions', conditions],
        ['convert-to-arrow-function', convertToArrowFunction],
        ['convert-arguments-to-rest', convertArgumentsToRest],
        ['declare', declare],
        ['for-of', forOf],
        ['regexp', regexp],
        removeUnusedVariables && ['remove-unused-variables', removeUnusedVariablesPlugin],
        ['remove-unreachable-code', removeUnreachableCode],
        ['remove-debugger', removeDebugger],
        ['remove-empty', removeEmpty],
        ['remove-useless-spread', removeUselessSpread],
        ['remove-useless-return', removeUselessReturn],
        ['remove-useless-else', removeUselessElse],
        ['remove-unused-expressions', removeUnusedExpressions],
        ['remove-unreferenced-variables', removeUnreferencedVariables],
        ['remove-nested-blocks', removeNestedBlocks],
        removeConsole && ['remove-console', removeConsolePlugin],
        ['reuse-duplicate-init', reuseDuplicateInit],
        ['logical-expressions', logicalExpressions],
        ['merge-destructuring-properties', mergeDestructuringProperties],
        ['merge-duplicate-functions', mergeDuplicateFunctions],
        ['minify/shorten-names', shortenNames],
        ['new', newPlugin],
        ['types', types],
    ].filter(Boolean);
    
    return plugins;
};
