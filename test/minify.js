import {extend} from 'supertape';
import {minifyExtension} from './extension.js';

const test = extend({
    minify: minifyExtension,
});

test('@putout/minify: arrow', (t) => {
    t.minify('arrow', {
        expected: [
            'start',
            'hello',
            'world',
        ],
    });
    t.end();
});

test('@putout/minify: assign', (t) => {
    t.minify('assign', {
        expected: 2,
    });
    t.end();
});

test('@putout/minify: apply-optional-chainig', (t) => {
    t.minify('apply-optional-chaining', {
        expected: 1,
    });
    t.end();
});

test('@putout/minify: conditions', (t) => {
    t.minify('conditions', {
        expected: 2,
        conditions: true,
    });
    t.end();
});

test('@putout/minify: comments', (t) => {
    t.minify('comments');
    t.end();
});

test('@putout/minify: else', (t) => {
    t.minify('else', {
        expected: 'hello',
    });
    t.end();
});

test('@putout/minify: minify', (t) => {
    t.minify('minify', {
        expected: [
            'hello',
            'world',
        ],
    });
    t.end();
});

test('@putout/minify: function', (t) => {
    t.minify('function', {
        expected: [undefined],
    });
    t.end();
});

test('@putout/minify: boolean', (t) => {
    t.minify('boolean', {
        expected: [true, false],
    });
    t.end();
});

test('@putout/minify: infinity', (t) => {
    t.minify('infinity', {
        expected: Infinity,
    });
    t.end();
});

test('@putout/minify: unused', (t) => {
    t.minify('unused', {
        expected: 5,
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
    t.minify('dead-code', {
        run: false,
    });
    t.end();
});

test('@putout/minify: merge-duplicate-functions', (t) => {
    t.minify('merge-duplicate-functions');
    t.end();
});

test('@putout/minify: merge-assignment-expressions', (t) => {
    t.minify('merge-assignment-expressions');
    t.end();
});

test('@putout/minify: merge-duplicate-imports', (t) => {
    t.minify('merge-duplicate-imports', {
        run: false,
    });
    t.end();
});

test('@putout/minify: merge-loops', (t) => {
    t.minify('merge-loops', {
        expected: [
            1,
            2,
            1,
            2,
        ],
    });
    t.end();
});

test('@putout/minify: remove-useless-variables', (t) => {
    t.minify('remove-useless-variables', {
        removeUnusedVariables: true,
        expected: [3],
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
        expected: [
            1,
            2,
            3,
            4,
            0,
        ],
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
    t.minify('apply-template-literals', {
        expected: ['("hello")'],
    });
    t.end();
});

test('@putout/minify: for', (t) => {
    t.minify('for', {
        expected: [1],
    });
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
    t.minify('remove-unreferenced-variables', {
        expected: [5, 0],
    });
    t.end();
});

test('@putout/minify: for-of: remove-useless', (t) => {
    t.minify('for-of-remove-useless', {
        expected: ['hello'],
    });
    t.end();
});

test('@putout/minify: for-of: nested', (t) => {
    t.minify('for-of-nested', {
        expected: ['hello'],
    });
    t.end();
});

test('@putout/minify: mangle-names: enabled', (t) => {
    t.minify('mangle-names', {
        mangle: true,
    });
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

test('@putout/minify: void', (t) => {
    t.minify('void', {
        expected: [{
            DEV: undefined,
            on: 'x',
        }],
    });
    t.end();
});

test('@putout/minify: undefined', (t) => {
    t.minify('undefined');
    t.end();
});

test('@putout/minify: before-init', (t) => {
    t.minify('before-init', {
        expected: [0, 1],
    });
    t.end();
});

test('@putout/minify: convert-arguments-to-rest', (t) => {
    t.minify('convert-arguments-to-rest');
    t.end();
});

test('@putout/minify: convert-const-to-var', (t) => {
    t.minify('convert-const-to-var');
    t.end();
});

test('@putout/minify: types', (t) => {
    t.minify('types');
    t.end();
});

test('@putout/minify: shebang', (t) => {
    t.minify('shebang', {
        run: false,
    });
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
        expected: [2],
    });
    t.end();
});

test('@putout/minify: convert-strict-equal-equal: on', (t) => {
    t.minify('convert-strict-equal-to-equal-on', {
        convertStrictEqualToEqual: true,
        expected: [1],
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
        expected: [5, 0],
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

test('@putout/minify: ternary', (t) => {
    t.minify('ternary');
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
    t.minify('closure', {
        expected: [
            5,
            undefined,
        ],
    });
    t.end();
});

test('@putout/minify: mangle-names-overlap', (t) => {
    t.minify('mangle-names-overlap', {
        expected: [
            undefined,
            5,
        ],
    });
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
    t.minify('declaration-order', {
        expected: [1],
    });
    t.end();
});

test('@putout/minify: return-arrow', (t) => {
    t.minify('return-arrow');
    t.end();
});

test('@putout/minify: switch', (t) => {
    t.minify('switch', {
        expected: ['bar'],
    });
    t.end();
});

test('@putout/minify: class', (t) => {
    t.minify('class');
    t.end();
});

test('@putout/minify: merge-variables', (t) => {
    t.minify('merge-variables', {
        expected: [
            'a',
            'b2',
        ],
    });
    t.end();
});

test('@putout/minify: for-each-ternary', (t) => {
    t.minify('for-each-ternary');
    t.end();
});

test('@putout/minify: duplicate-declaration', (t) => {
    t.minify('duplicate-declaration');
    t.end();
});

test('@putout/minify: join-continued-strings', (t) => {
    t.minify('join-continued-strings', {
        expected: [
            '  1  2  3',
            '    a    b    c',
            '  1  2  3\n',
            '    a    b    c\n',
        ],
    });
    t.end();
});

test('@putout/minify: try-catch', (t) => {
    t.minify('try-catch');
    t.end();
});

test('@putout/minify: var', (t) => {
    t.minify('var', {
        expected: ['12'],
    });
    t.end();
});

test('@putout/minify: var: overlap', (t) => {
    t.minify('var-overlap');
    t.end();
});

test('@putout/minify: fixCount', (t) => {
    t.minify('fix-count', {
        fixCount: 2,
    });
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
        expected: [1],
        mergeVariables: false,
    });
    t.end();
});
