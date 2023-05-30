import {fileURLToPath} from 'url';
import {
    dirname,
    join,
} from 'path';
import {
    writeFileSync,
    readFileSync,
} from 'fs';
import {extend} from 'supertape';
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

test('@putout/minify: conditions', (t) => {
    t.minify('conditions');
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

test('@putout/minify: remove-useless-variables', (t) => {
    t.minify('remove-useless-variables', {
        removeUnusedVariables: true,
    });
    t.end();
});

test('@putout/minify: remove-useless-spread: options', (t) => {
    t.minify('remove-useless-spread');
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

test('@putout/minify: mangle-names', (t) => {
    t.minify('mangle-names');
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

test('@putout/minify: shebang', (t) => {
    t.minify('shebang');
    t.end();
});

test('@putout/minify: remove-console', (t) => {
    t.minify('remove-console', {
        removeConsole: true,
    });
    t.end();
});

test('@putout/minify: remove-unreferenced-variables: bundle', (t) => {
    t.minify('remove-unreferenced-variables', {
        bundle: true,
    });
    t.end();
});
