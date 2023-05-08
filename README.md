# @putout/minify [![NPM version][NPMIMGURL]][NPMURL]

[NPMIMGURL]: https://img.shields.io/npm/v/@putout/minify.svg?style=flat&longCache=true
[NPMURL]: https://npmjs.org/package/@putout/minify "npm"

🐊[**Putout**](https://github.com/coderaiser/putout)-based JavaScript minifier.

## Install

```sh
npm i @putout/minify
```

## API

```js
import {minify} from '@putout/minify';

minify(`
    const a = 5;
    const b = 6;
`);

// returns
var a=5,b=6;
```

## License

MIT
