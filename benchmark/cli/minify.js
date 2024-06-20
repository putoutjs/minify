import {readFileSync, writeFileSync} from 'node:fs';
import {minify} from '@putout/minify';

export const runMinify = (dist, out) => {
    const body = readFileSync(dist, 'utf8');
    writeFileSync(out, minify(body));
};
