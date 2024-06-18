import {minify} from '@putout/minify';
import { readFileSync, writeFileSync } from 'node:fs'

const body = readFileSync(process.argv[2], 'utf8');
writeFileSync(process.argv[3], minify(body));
