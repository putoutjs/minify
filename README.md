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
## Supported transforms

Here is list of support 🐊**Putout** transformations:

- ❌ [`apply-template-literals`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-apply-template-literals#readme);
- ❌ [`remove-empty`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-empty#readme);
- ❌ [`remove-unused-variables`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-unused-variables#readme);
- ❌ [`typescript/remove-unused-types`](https://github.com/coderaiser/putout/tree/v24.0.2/packages/plugin-typescript#remove-unused-types#readme);
- ❌ [`remove-unused-expressions`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-removeunused-expressions#readme);
- ❌ [`remove-unreferenced-variables`](https://github.com/coderaiser/putout/tree/29.0.0/packages/plugin-remove-unreferenced-variables#readme);
- ❌ [`remove-useless-arguments`](https://github.com/coderaiser/putout/tree/master/packages/plugin-remove-useless-arguments#readme);
- ❌ [`remove-useless-return`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-useless-return#readme);
- ❌ [`remove-useless-spread`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-useless-spread/#readme#readme);
- ❌ [`remove-useless-variables/rename`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-useless-arguments#rename#readme);
- ❌ [`remove-console`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-console#readme);
- ❌ [`remove-debugger`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-debugger#readme);
- ❌ [`remove-unreachable-code`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-unreachable-code#readme);
- ❌ [`for-of/remove-useless`](https://github.com/coderaiser/putout/tree/v29.1.2/packages/plugin-remove-useless-for-of#readme);
- ❌ [`for-of/remove-unused-variables`](https://github.com/coderaiser/putout/tree/29.1.2/packages/plugin-for-of#remove-unused-variables);

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

```js
import {minify} from '@putout/minify';

const source = `
    const a = 5;
    const b = 6;
`;

minify(source, {
    removeUnusedVariables: false,
});
```

## License

MIT
