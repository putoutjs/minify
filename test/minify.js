import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';
import {writeFileSync, readFileSync} from 'node:fs';
import {extend} from 'supertape';
import process from 'node:process';
import {minify} from '../lib/minify.js';
import {minify as bundledMinify} from '../bundle/minify.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const {UPDATE} = process.env;

const chooseMinify = (options = {}) => options.bundle ? bundledMinify : minify;

export const minifyExtension = ({pass, equal}) => (fixtureName, options) => {
    const nameFrom = join(__dirname, 'fixture', `${fixtureName}.js`);
    const nameTo = join(__dirname, 'fixture', `${fixtureName}-fix.js`);
    
    const fixtureFrom = readFileSync(nameFrom, 'utf8');
    const fixtureTo = readFileSync(nameTo, 'utf8');
    
    const result = chooseMinify(options)(fixtureFrom, {
        removeUnusedVariables: false,
        ...options,
    });
    
    if (UPDATE) {
        writeFileSync(nameTo, result);
        return pass('fixture updated');
    }
    
    return equal(result, fixtureTo);
};

const test = extend({
    minify: minifyExtension,
});

test('@putout/minify: arrow', (t) => {
    t.minify('arrow');
    t.end();
});

test('@putout/minify: apply-optional-chainig', (t) => {
    t.minify('apply-optional-chaining');
    t.end();
});

test('@putout/minify: conditions', (t) => {
    t.minify('conditions');
    t.end();
});

test('@putout/minify: comments', (t) => {
    t.minify('comments');
    t.end();
});

test('@putout/minify: else', (t) => {
    t.minify('else');
    t.end();
});

test('@putout/minify: minify', (t) => {
    t.minify('minify');
    t.end();
});

test('@putout/minify: function', (t) => {
    t.minify('function');
    t.end();
});

test('@putout/minify: boolean', (t) => {
    t.minify('boolean');
    t.end();
});

test('@putout/minify: infinity', (t) => {
    t.minify('infinity');
    t.end();
});

test('@putout/minify: unused', (t) => {
    t.minify('unused', {
        removeUnusedVariables: true,
    });
    t.end();
});

test('@putout/minify: type', (t) => {
    t.minify('type');
    t.end();
});

test('@putout/minify: guard', (t) => {
    t.minify('guard');
    t.end();
});

test('@putout/minify: dead-code', (t) => {
    t.minify('dead-code');
    t.end();
});

test('@putout/minify: merge-duplicate-functions', (t) => {
    t.minify('merge-duplicate-functions');
    t.end();
});

test('@putout/minify: merge-duplicate-imports', (t) => {
    t.minify('merge-duplicate-imports');
    t.end();
});

test('@putout/minify: merge-loops', (t) => {
    t.minify('merge-loops');
    t.end();
});

test('@putout/minify: remove-useless-variables', (t) => {
    t.minify('remove-useless-variables', {
        removeUnusedVariables: true,
    });
    t.end();
});

test('@putout/minify: remove-useless-spread', (t) => {
    t.minify('remove-useless-spread');
    t.end();
});

test('@putout/minify: remove-useless-spread: disabled', (t) => {
    t.minify('remove-useless-spread-disabled', {
        removeUselessSpread: false,
    });
    t.end();
});

test('@putout/minify: remove-useless-return', (t) => {
    t.minify('remove-useless-return');
    t.end();
});

test('@putout/minify: if', (t) => {
    t.minify('if');
    t.end();
});

test('@putout/minify: if: logical', (t) => {
    t.minify('if-logical');
    t.end();
});

test('@putout/minify: apply-template-literals', (t) => {
    t.minify('apply-template-literals');
    t.end();
});

test('@putout/minify: for', (t) => {
    t.minify('for');
    t.end();
});

test('@putout/minify: logical-expressions', (t) => {
    t.minify('logical-expressions');
    t.end();
});

test('@putout/minify: regexp', (t) => {
    t.minify('regexp');
    t.end();
});

test('@putout/minify: remove-unreachable-code', (t) => {
    t.minify('remove-unreachable-code');
    t.end();
});

test('@putout/minify: remove-unused-expressions', (t) => {
    t.minify('remove-unused-expressions');
    t.end();
});

test('@putout/minify: remove-unreferenced-variables', (t) => {
    t.minify('remove-unreferenced-variables');
    t.end();
});

test('@putout/minify: for-of: remove-useless', (t) => {
    t.minify('for-of-remove-useless');
    t.end();
});

test('@putout/minify: for-of: nested', (t) => {
    t.minify('for-of-nested');
    t.end();
});

test('@putout/minify: mangle-names', (t) => {
    t.minify('mangle-names');
    t.end();
});

test('@putout/minify: mangle-class-names', (t) => {
    t.minify('mangle-class-names');
    t.end();
});

test('@putout/minify: merge-destructuring-properties', (t) => {
    t.minify('merge-destructuring-properties');
    t.end();
});

test('@putout/minify: undefined', (t) => {
    t.minify('undefined');
    t.end();
});

test('@putout/minify: convert-arguments-to-rest', (t) => {
    t.minify('convert-arguments-to-rest');
    t.end();
});

test('@putout/minify: types', (t) => {
    t.minify('types');
    t.end();
});

test('@putout/minify: shebang', (t) => {
    t.minify('shebang');
    t.end();
});

test('@putout/minify: declare', (t) => {
    t.minify('declare');
    t.end();
});

test('@putout/minify: promises', (t) => {
    t.minify('promises');
    t.end();
});

test('@putout/minify: remove-console', (t) => {
    t.minify('remove-console', {
        removeConsole: true,
    });
    t.end();
});

test('@putout/minify: convert-strict-equal-equal', (t) => {
    t.minify('convert-strict-equal-to-equal', {
        convertStrictEqualToEqual: false,
    });
    t.end();
});

test('@putout/minify: convert-return-to-sequence-expression', (t) => {
    t.minify('convert-return-to-sequence-expression');
    t.end();
});

test('@putout/minify: remove-unreferenced-variables: bundle', (t) => {
    t.minify('remove-unreferenced-variables', {
        bundle: true,
    });
    t.end();
});

test('@putout/minify: reuse-duplicate-init', (t) => {
    t.minify('reuse-duplicate-init');
    t.end();
});

test('@putout/minify: sequence-expressions', (t) => {
    t.minify('sequence-expressions');
    t.end();
});

test('@putout/minify: overlap', (t) => {
    t.minify('overlap');
    t.end();
});

test('@putout/minify: in', (t) => {
    t.minify('in');
    t.end();
});

test('@putout/minify: increment', (t) => {
    t.minify('increment');
    t.end();
});

test('@putout/minify: quotes', (t) => {
    t.minify('quotes');
    t.end();
});

test('@putout/minify: closure', (t) => {
    t.minify('closure');
    t.end();
});

test('@putout/minify: mangle-names-overlap', (t) => {
    t.minify('mangle-names-overlap');
    t.end();
});

test('@putout/minify: simplify-ternary', (t) => {
    t.minify('simplify-ternary');
    t.end();
});

test('@putout/minify: const', (t) => {
    t.minify('const');
    t.end();
});

test('@putout/minify: declaration-order', (t) => {
    t.minify('declaration-order');
    t.end();
});

test('@putout/minify: return-arrow', (t) => {
    t.minify('return-arrow');
    t.end();
});

test('@putout/minify: switch', (t) => {
    t.minify('switch');
    t.end();
});

test('@putout/minify: class', (t) => {
    t.minify('class');
    t.end();
});

test('@putout/minify: merge-variables', (t) => {
    t.minify('merge-variables');
    t.end();
});

test('@putout/minify: for-each-ternary', (t) => {
    t.minify('for-each-ternary');
    t.end();
});

test('@putout/minify: join-continued-strings', (t) => {
    t.minify('join-continued-strings');
    t.end();
});

test('@putout/minify: try-catch', (t) => {
    t.minify('try-catch');
    t.end();
});

test('@putout/minify: var', (t) => {
    t.minify('var');
    t.end();
});

test('@putout/minify: var: overlap', (t) => {
    t.minify('var-overlap');
    t.end();
});

test('@putout/minify: mangle: disabled', (t) => {
    t.minify('mangle-disabled', {
        mangle: false,
    });
    t.end();
});

test('@putout/minify: apply-template-literals: disabled', (t) => {
    t.minify('apply-template-literals-disabled', {
        applyTemplateLiterals: false,
    });
    t.end();
});

test('@putout/minify: merge-variables: off', (t) => {
    t.minify('merge-variables-off', {
        mergeVariables: false,
    });
    t.end();
});
