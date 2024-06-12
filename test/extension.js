import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {readFileSync, writeFileSync} from 'node:fs';
import process from 'node:process';
import {minify as bundledMinify} from '../bundle/minify.js';
import {minify} from '../lib/minify.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const {UPDATE, RUN} = process.env;

const chooseMinify = (bundle) => bundle ? bundledMinify : minify;

export const minifyExtension = ({pass, equal, deepEqual}) => (fixtureName, testOptions = {}) => {
    const {
        bundle,
        expected = [],
        ...options
    } = testOptions;
    
    const nameFrom = join(__dirname, 'fixture', `${fixtureName}.js`);
    const nameTo = join(__dirname, 'fixture', `${fixtureName}-fix.js`);
    
    const fixtureFrom = readFileSync(nameFrom, 'utf8');
    
    const result = chooseMinify(bundle)(fixtureFrom, {
        removeUnusedVariables: false,
        ...options,
    });
    
    if (UPDATE) {
        writeFileSync(nameTo, result);
        return pass('fixture updated');
    }
    
    const fixtureTo = readFileSync(nameTo, 'utf8');
    
    if (RUN) {
        const resultRun = run(result, expected, {
            deepEqual,
        });
        
        if (!resultRun.is)
            return resultRun;
    }
    
    return equal(result, fixtureTo);
};

function run(code, expected, {deepEqual}) {
    const fn = Function('__minify_log', code);
    const list = [];
    const push = list.push.bind(list);
    
    fn(push);
    
    return deepEqual(list, expected);
}
