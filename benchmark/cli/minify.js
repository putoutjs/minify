import {readFileSync, writeFileSync} from 'node:fs';
import process from 'node:process';
import {minify} from '@putout/minify';

const body = readFileSync(process.argv[2], 'utf8');
writeFileSync(process.argv[3], minify(body));
