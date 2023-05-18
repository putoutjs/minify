import minifyPlugin from '@putout/plugin-minify';
import applyTemplateLiterals from '@putout/plugin-apply-template-literals';
import removeConsolePlugin from '@putout/plugin-remove-console';
import removeUnusedVariablesPlugin from '@putout/plugin-remove-unused-variables';
import removeUnreachableCode from '@putout/plugin-remove-unreachable-code';
import removeDebugger from '@putout/plugin-remove-debugger';
import removeEmpty from '@putout/plugin-remove-empty';
import removeUselessSpread from '@putout/plugin-remove-useless-spread';
import removeUselessReturn from '@putout/plugin-remove-useless-return';
import removeUnusedExpressions from '@putout/plugin-remove-unused-expressions';
import removeUnreferencedVariables from '@putout/plugin-remove-unreferenced-variables';
import mergeDuplicateFunctions from '@putout/plugin-merge-duplicate-functions';
import forOf from '@putout/plugin-for-of';
import removeNestedBlocks from '@putout/plugin-remove-nested-blocks';
import logicalExpressions from '@putout/plugin-logical-expressions';
import conditions from '@putout/plugin-conditions';
import newPlugin from '@putout/plugin-new';

const parseOptions = (options) => ({
    removeUnusedVariables: true,
    removeConsole: false,
    ...options,
});

export const getPlugins = (options) => {
    const {
        removeUnusedVariables,
        removeConsole,
    } = parseOptions(options);
    
    const plugins = [
        ['apply-template-literals', applyTemplateLiterals],
        ['conditions', conditions],
        ['merge-duplicate-functions', mergeDuplicateFunctions],
        removeUnusedVariables && ['remove-unused-variables', removeUnusedVariablesPlugin],
        ['remove-unreachable-code', removeUnreachableCode],
        ['remove-debugger', removeDebugger],
        ['remove-empty', removeEmpty],
        ['remove-useless-spread', removeUselessSpread],
        ['remove-useless-return', removeUselessReturn],
        ['remove-unused-expressions', removeUnusedExpressions],
        ['remove-unreferenced-variables', removeUnreferencedVariables],
        ['for-of', forOf],
        ['remove-nested-blocks', removeNestedBlocks],
        removeConsole && ['remove-console', removeConsolePlugin],
        ['minify', minifyPlugin],
        ['new', newPlugin],
        ['logical-expressions', logicalExpressions],
    ].filter(Boolean);
    
    return plugins;
};

