# @putout/minify [![NPM version][NPMIMGURL]][NPMURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

[NPMIMGURL]: https://img.shields.io/npm/v/@putout/minify.svg?style=flat&longCache=true
[NPMURL]: https://npmjs.org/package/@putout/minify "npm"
[CoverageURL]: https://coveralls.io/github/putoutjs/minify?branch=master
[CoverageIMGURL]: https://coveralls.io/repos/putoutjs/minify/badge.svg?branch=master&service=github

🐊[**Putout**](https://github.com/coderaiser/putout)-based JavaScript minifier.

## Install

```sh
npm i @putout/minify
```

## Supported minifier transforms

### 🐊**Putout** transforms

Here is list of support 🐊**Putout** transformations:

- ✅ [`apply-template-literals`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-apply-template-literals#readme);
- ✅ [`minify/mangle-names`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-minify#mangle-names);
- ✅ [`remove-empty`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-empty#readme);
- ✅ [`remove-nested-blocks`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-nested-blocks#readme);
- ✅ [`remove-unused-variables`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-unused-variables#readme);
- ✅ [`remove-unused-expressions`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-unused-expressions#readme);
- ✅ [`remove-unreferenced-variables`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-unreferenced-variables#readme);
- ✅ [`remove-useless-arguments`](https://github.com/coderaiser/putout/tree/master/packages/plugin-remove-useless-arguments#readme);
- ✅ [`remove-useless-return`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-useless-return#readme);
- ✅ [`remove-useless-spread`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-useless-spread/#readme);
- ✅ [`remove-useless-variables`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-useless-variables#readme);
- ✅ [`remove-console`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-console#readme);
- ✅ [`remove-debugger`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-debugger#readme);
- ✅ [`remove-unreachable-code`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-unreachable-code#readme);
- ✅ [`for-of/remove-useless`](https://github.com/coderaiser/putout/tree/v29.1.2/packages/plugin-for-of#remove-useless);
- ✅ [`for-of/remove-unused-variables`](https://github.com/coderaiser/putout/tree/29.1.2/packages/plugin-for-of#remove-unused-variables);

## API

```js
import {minify} from '@putout/minify';

minify(`
    const a = 5;
    const b = 6;
    
    fn(a, b);
`);
```

```
// returns
var a=5,b=6;fn(a,b);
```

### Options

You can also pass options to `minify`. Here is list of default options:

```js
({
    removeUnusedVariables: true,
    removeConsole: false,
});
```

And usage example:

```js
import {minify} from '@putout/minify';

const source = `
    const a = 5;
    const b = 6;
`;

minify(source, {
    removeUnusedVariables: true,
});
```

## License

MIT
