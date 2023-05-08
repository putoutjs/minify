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

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const {UPDATE} = process.env;

export const minifyExtension = ({pass, equal}) => (fixtureName) => {
    const nameFrom = join(__dirname, 'fixture', `${fixtureName}.js`);
    const nameTo = join(__dirname, 'fixture', `${fixtureName}-fix.js`);
    
    const fixtureFrom = readFileSync(nameFrom, 'utf8');
    const fixtureTo = readFileSync(nameTo, 'utf8');
    
    const result = minify(fixtureFrom);
    
    if (UPDATE) {
        writeFileSync(nameTo, result);
        return pass('fixture updated');
    }
    
    return equal(result, fixtureTo);
};

const test = extend({
    minify: minifyExtension,
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
