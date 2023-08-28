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

test('@putouawait minify: arrow', async ({minify}) => {
    await minify('arrow');
});

test('@putouawait minify: apply-optional-chainig', async ({minify}) => {
    await minify('apply-optional-chaining');
});

test('@putouawait minify: conditions', async ({minify}) => {
    await minify('conditions');
});

test('@putouawait minify: comments', async ({minify}) => {
    await minify('comments');
});

test('@putouawait minify: else', async ({minify}) => {
    await minify('else');
});

test('@putouawait minify: minify', async ({minify}) => {
    await minify('minify');
});

test('@putouawait minify: function', async ({minify}) => {
    await minify('function');
});

test('@putouawait minify: boolean', async ({minify}) => {
    await minify('boolean');
});

test('@putouawait minify: infinity', async ({minify}) => {
    await minify('infinity');
});

test('@putouawait minify: unused', async ({minify}) => {
    await minify('unused', {
        removeUnusedVariables: true,
    });
});

test('@putouawait minify: type', async ({minify}) => {
    await minify('type');
});

test('@putouawait minify: guard', async ({minify}) => {
    await minify('guard');
});

test('@putouawait minify: dead-code', async ({minify}) => {
    await minify('dead-code');
});

test('@putouawait minify: merge-duplicate-functions', async ({minify}) => {
    await minify('merge-duplicate-functions');
});

test('@putouawait minify: remove-useless-variables', async ({minify}) => {
    await minify('remove-useless-variables', {
        removeUnusedVariables: true,
    });
});

test('@putouawait minify: remove-useless-spread', async ({minify}) => {
    await minify('remove-useless-spread');
});

test('@putouawait minify: remove-useless-spread: disabled', async ({minify}) => {
    await minify('remove-useless-spread-disabled', {
        removeUselessSpread: false,
    });
});

test('@putouawait minify: remove-useless-return', async ({minify}) => {
    await minify('remove-useless-return');
});

test('@putouawait minify: if', async ({minify}) => {
    await minify('if');
});

test('@putouawait minify: apply-template-literals', async ({minify}) => {
    await minify('apply-template-literals');
});

test('@putouawait minify: for', async ({minify}) => {
    await minify('for');
});

test('@putouawait minify: logical-expressions', async ({minify}) => {
    await minify('logical-expressions');
});

test('@putouawait minify: regexp', async ({minify}) => {
    await minify('regexp');
});

test('@putouawait minify: remove-unreachable-code', async ({minify}) => {
    await minify('remove-unreachable-code');
});

test('@putouawait minify: remove-unused-expressions', async ({minify}) => {
    await minify('remove-unused-expressions');
});

test('@putouawait minify: remove-unreferenced-variables', async ({minify}) => {
    await minify('remove-unreferenced-variables');
});

test('@putouawait minify: for-of: remove-useless', async ({minify}) => {
    await minify('for-of-remove-useless');
});

test('@putouawait minify: mangle-names', async ({minify}) => {
    await minify('mangle-names');
});

test('@putouawait minify: mangle-class-names', async ({minify}) => {
    await minify('mangle-class-names');
});

test('@putouawait minify: merge-destructuring-properties', async ({minify}) => {
    await minify('merge-destructuring-properties');
});

test('@putouawait minify: undefined', async ({minify}) => {
    await minify('undefined');
});

test('@putouawait minify: convert-arguments-to-rest', async ({minify}) => {
    await minify('convert-arguments-to-rest');
});

test('@putouawait minify: types', async ({minify}) => {
    await minify('types');
});

test('@putouawait minify: shebang', async ({minify}) => {
    await minify('shebang');
});

test('@putouawait minify: declare', async ({minify}) => {
    await minify('declare');
});

test('@putouawait minify: promises', async ({minify}) => {
    await minify('promises');
});

test('@putouawait minify: remove-console', async ({minify}) => {
    await minify('remove-console', {
        removeConsole: true,
    });
});

test('@putouawait minify: remove-unreferenced-variables: bundle', async ({minify}) => {
    await minify('remove-unreferenced-variables', {
        bundle: true,
    });
});

test('@putouawait minify: reuse-duplicate-init', async ({minify}) => {
    await minify('reuse-duplicate-init');
});

test('@putouawait minify: overlap', async ({minify}) => {
    await minify('overlap');
});

test('@putouawait minify: in', async ({minify}) => {
    await minify('in');
});
