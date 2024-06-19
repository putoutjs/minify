import {get} from 'node:https';
import {execSync} from 'node:child_process';
import {
    statSync,
    createWriteStream,
    rmSync,
} from 'node:fs';

const listFiles = {
    react: {
        url: 'https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js',
    },
    solidjs: {
        url: 'https://cdn.jsdelivr.net/npm/solid-js@1.8.17/dist/solid.min.js',
    },
    lodash: {
        url: 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
    },
    vue: {
        url: 'https://cdn.jsdelivr.net/npm/vue@3.4.29/dist/vue.global.min.js',
    },
    angular: {
        url: 'https://cdn.jsdelivr.net/npm/angular@1.8.3/angular.min.js',
    },
    jquery: {
        url: 'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js',
    },
    example1: {
        file: './source/example1.js',
    },
};

const compressors = {
    'bun': 'bun build --minify {dist} --outfile {out}',
    'esbuild': './node_modules/.bin/esbuild {dist} --bundle --minify --outfile={out}',
    'terser': './node_modules/.bin/terser {dist} --compress --mangle --comments false -o {out}',
    '@putout/minify': 'node ./cli/minify.js {dist} {out}',
};

const debug = () => {};

// debug = console.log;
function fileExists(path) {
    try {
        const s = statSync(path);
        debug(`File ${path} exists ${s.size} bytes`);
        
        return s.size > 0;
    } catch(e) {
        debug(`File ${path} does not exist`);
        return false;
    }
}

function downloadFile(url, dest) {
    if (fileExists(dest)) {
        debug(`File ${dest} already exists`);
        return;
    }
    
    return new Promise((resolve, reject) => {
        debug(`Downloading ${url} to ${dest}`);
        get(url, (res) => {
            const file = createWriteStream(dest, '');
            res.pipe(file);
            res.on('end', () => {
                debug(`Downloaded ${url} to ${dest}`);
                resolve();
            });
        });
    });
}

function fileFromUrl(url) {
    return `./source/${url}.js`;
}

async function download() {
    for (const [key, value] of Object.entries(listFiles)) {
        if (!value.url)
            continue;
        
        const {url} = value;
        const dest = fileFromUrl(key);
        
        await downloadFile(url, dest);
    }
}

function getPathFromFile(file) {
    return listFiles[file].file || fileFromUrl(file);
}

function removeFile(filePath) {
    rmSync(filePath, {
        force: true,
    });
}

function compareTask(file) {
    const dist = getPathFromFile(file);
    const result = {};
    
    for (const [key, value] of Object.entries(compressors)) {
        const out = `./result/${file}-${key}.js`;
        removeFile(out);
        
        const cmd = value
            .replace('{dist}', dist)
            .replace('{out}', out);
        
        debug(`Running: ${cmd}`);
        let endTime = 0;
        
        try {
            const startTime = Date.now();
            
            execSync(cmd, {
                stdio: 'pipe',
                
                encoding: 'utf8',
            });
            endTime = Date.now() - startTime;
        } catch(e) {
            console.error(`Error running ${key}: ${e.message} ${e.stderr}`);
            continue;
        }
        
        const fileSize = statSync(out).size;
        
        result[key] = {
            time: endTime,
            size: fileSize,
        };
        console.log(`File: ${file} Compressor: ${key} Time: ${endTime}ms Size: ${fileSize} bytes`);
    }
    
    return result;
}

function convertMap(fn, obj) {
    return Object.fromEntries(Object
        .entries(obj)
        .map(([k, v]) => [k, fn(v, k, obj)])
        .filter(([k, v]) => v !== undefined));
}

function convertTable(obj, key) {
    return convertMap(convertMap.bind(null, (v) => v[key]), obj);
}

function compare() {
    const result = {};
    
    for (const key of Object.keys(listFiles)) {
        result[key] = compareTask(key);
        const originalSize = statSync(getPathFromFile(key)).size;
        
        result[key] = {
            original: {
                size: originalSize,
            },
            ...result[key],
        };
    }
    
    return result;
}

async function main() {
    await download();
    const result = compare();
    
    debug(result);
    const resultTime = convertTable(result, 'time');
    
    debug(resultTime);
    console.log('Time in ms');
    console.table(resultTime);
    const resultSize = convertMap(convertMap.bind(null, (v, k, obj) => `${v} (${(100 * v / obj.original).toFixed(1)}%)`), convertTable(result, 'size'));
    
    debug(resultSize);
    console.log('Size in bytes');
    console.table(resultSize);
}

main();
