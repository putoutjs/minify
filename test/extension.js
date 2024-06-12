import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {readFileSync, writeFileSync} from 'node:fs';
import process from 'node:process';
import {minify as bundledMinify} from '../bundle/minify.js';
import {minify} from '../lib/minify.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const {UPDATE} = process.env;

const chooseMinify = (options = {}) => options.bundle ? bundledMinify : minify;

export const minifyExtension = ({pass, equal}) => (fixtureName, options) => {
    const nameFrom = join(__dirname, 'fixture', `${fixtureName}.js`);
    const nameTo = join(__dirname, 'fixture', `${fixtureName}-fix.js`);
    
    const fixtureFrom = readFileSync(nameFrom, 'utf8');
    
    const result = chooseMinify(options)(fixtureFrom, {
        removeUnusedVariables: false,
        ...options,
    });
    
    if (UPDATE) {
        writeFileSync(nameTo, result);
        return pass('fixture updated');
    }
    
    const fixtureTo = readFileSync(nameTo, 'utf8');
    
    return equal(result, fixtureTo);
};
