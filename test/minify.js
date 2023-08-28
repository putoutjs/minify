import {fileURLToPath} from 'node:url';
import {
    dirname,
    join,
} from 'node:path';
import {
    writeFileSync,
    readFileSync,
} from 'node:fs';
import {extend} from 'supertape';
import {minify} from '../lib/minify.js';
import {minify as bundledMinify} from '../bundle/minify.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const {UPDATE} = process.env;

const chooseMinify = (options = {}) => options.bundle ? bundledMinify : minify;

export const minifyExtension = ({pass, equal}) => async (fixtureName, options) => {
    const nameFrom = join(__dirname, 'fixture', `${fixtureName}.js`);
    const nameTo = join(__dirname, 'fixture', `${fixtureName}-fix.js`);
    
    const fixtureFrom = readFileSync(nameFrom, 'utf8');
    const fixtureTo = readFileSync(nameTo, 'utf8');
    
    const result = await chooseMinify(options)(fixtureFrom, {
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

test('putout: minify: arrow', async ({minify}) => {
    await minify('arrow');
});

test('putout: minify: apply-optional-chainig', async ({minify}) => {
    await minify('apply-optional-chaining');
});

test('putout: minify: conditions', async ({minify}) => {
    await minify('conditions');
});

test('putout: minify: comments', async ({minify}) => {
    await minify('comments');
});

test('putout: minify: else', async ({minify}) => {
    await minify('else');
});

test('putout: minify: minify', async ({minify}) => {
    await minify('minify');
});

test('putout: minify: function', async ({minify}) => {
    await minify('function');
});

test('putout: minify: boolean', async ({minify}) => {
    await minify('boolean');
});

test('putout: minify: infinity', async ({minify}) => {
    await minify('infinity');
});

test('putout: minify: unused', async ({minify}) => {
    await minify('unused', {
        removeUnusedVariables: true,
    });
});

test('putout: minify: type', async ({minify}) => {
    await minify('type');
});

test('putout: minify: guard', async ({minify}) => {
    await minify('guard');
});

test('putout: minify: dead-code', async ({minify}) => {
    await minify('dead-code');
});

test('putout: minify: merge-duplicate-functions', async ({minify}) => {
    await minify('merge-duplicate-functions');
});

test('putout: minify: remove-useless-variables', async ({minify}) => {
    await minify('remove-useless-variables', {
        removeUnusedVariables: true,
    });
});

test('putout: minify: remove-useless-spread', async ({minify}) => {
    await minify('remove-useless-spread');
});

test('putout: minify: remove-useless-spread: disabled', async ({minify}) => {
    await minify('remove-useless-spread-disabled', {
        removeUselessSpread: false,
    });
});

test('putout: minify: remove-useless-return', async ({minify}) => {
    await minify('remove-useless-return');
});

test('putout: minify: if', async ({minify}) => {
    await minify('if');
});

test('putout: minify: apply-template-literals', async ({minify}) => {
    await minify('apply-template-literals');
});

test('putout: minify: for', async ({minify}) => {
    await minify('for');
});

test('putout: minify: logical-expressions', async ({minify}) => {
    await minify('logical-expressions');
});

test('putout: minify: regexp', async ({minify}) => {
    await minify('regexp');
});

test('putout: minify: remove-unreachable-code', async ({minify}) => {
    await minify('remove-unreachable-code');
});

test('putout: minify: remove-unused-expressions', async ({minify}) => {
    await minify('remove-unused-expressions');
});

test('putout: minify: remove-unreferenced-variables', async ({minify}) => {
    await minify('remove-unreferenced-variables');
});

test('putout: minify: for-of: remove-useless', async ({minify}) => {
    await minify('for-of-remove-useless');
});

test('putout: minify: mangle-names', async ({minify}) => {
    await minify('mangle-names');
});

test('putout: minify: mangle-class-names', async ({minify}) => {
    await minify('mangle-class-names');
});

test('putout: minify: merge-destructuring-properties', async ({minify}) => {
    await minify('merge-destructuring-properties');
});

test('putout: minify: undefined', async ({minify}) => {
    await minify('undefined');
});

test('putout: minify: convert-arguments-to-rest', async ({minify}) => {
    await minify('convert-arguments-to-rest');
});

test('putout: minify: types', async ({minify}) => {
    await minify('types');
});

test('putout: minify: shebang', async ({minify}) => {
    await minify('shebang');
});

test('putout: minify: declare', async ({minify}) => {
    await minify('declare');
});

test('putout: minify: promises', async ({minify}) => {
    await minify('promises');
});

test('putout: minify: remove-console', async ({minify}) => {
    await minify('remove-console', {
        removeConsole: true,
    });
});

test('putout: minify: remove-unreferenced-variables: bundle', async ({minify}) => {
    await minify('remove-unreferenced-variables', {
        bundle: true,
    });
});

test('putout: minify: reuse-duplicate-init', async ({minify}) => {
    await minify('reuse-duplicate-init');
});

test('putout: minify: overlap', async ({minify}) => {
    await minify('overlap');
});

test('putout: minify: in', async ({minify}) => {
    await minify('in');
});
