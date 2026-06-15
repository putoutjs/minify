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

Here is list of supported 🐊**Putout** transformations:

- ✅ [`apply-template-literals`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-apply-template-literals#readme);
- ✅ [`apply-optional-chaining`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-apply-optional-chaining#readme);
- ✅ [`conditions`](https://github.com/coderaiser/putout/tree/v29.10.0/packages/plugin-conditions#readme);
- ✅ [`convert-to-arrow-function`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-convert-to-arrow-functions#readme);
- ✅ [`arguments`](https://github.com/coderaiser/putout/tree/v41/packages/plugin-argumentst#readme);
- ✅ [`declare`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-declare#readme);
- ✅ [`for-of`](https://github.com/coderaiser/putout/tree/v34.0.0/packages/plugin-for-of#readme);
- ✅ [`logical-expressions`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-logical-expressions#readme);
- ✅ [`merge-duplicate-functions`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-merge-duplicate-functions#readme);
- ✅ [`esm/merge-duplicate-imports`](https://github.com/coderaiser/putout/tree/v41.0.0/packages/plugin-esm#merge-duplicate-imports);
- ✅ [`destructuring`](https://github.com/coderaiser/putout/tree/v41.0.0/packages/plugin-destructuring#readme);
- ✅ [`minify`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-minify#readme);
- ✅ [`new`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-new#readme);
- ✅ [`regexp`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-regexp#readme);
- ✅ [`reuse-duplicate-init`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-reuse-duplicate-init#readme);
- ✅ [`remove-empty`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-empty#readme);
- ✅ [`remove-nested-blocks`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-nested-blocks#readme);
- ✅ [`remove-unused-expressions`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-unused-expressions#readme);
- ✅ [`arguments`](https://github.com/coderaiser/putout/tree/v41.0.0/packages/plugin-arguments#readme);
- ✅ [`remove-useless-else`](https://github.com/coderaiser/putout/tree/master/packages/plugin-remove-useless-else#readme);
- ✅ [`return/remove-useless`](https://github.com/coderaiser/putout/tree/v41.0.0/packages/plugin-return#remove-useless);
- ✅ [`remove-useless-spread`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-useless-spread/#readme);
- ✅ [`variables`](https://github.com/coderaiser/putout/tree/v41.0.0/packages/plugin-variables#readme);
- ✅ [`remove-console`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-console#readme);
- ✅ [`remove-debugger`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-debugger#readme);
- ✅ [`remove-unreachable-code`](https://github.com/coderaiser/putout/tree/v29.0.0/packages/plugin-remove-unreachable-code#readme);
- ✅ [`simplify-ternary`](https://github.com/coderaiser/putout/tree/v34.0.0/packages/plugin-simplify-ternary#readme);
- ✅ [`types`](https://github.com/coderaiser/putout/tree/v29.7.1/packages/plugin-types#readme);

## API

```js
import {minify} from '@putout/minify';

minify(`
    const a = 5;
    const b = 6;
    
    fn(a, b);
`);
```

```zig
// returns
var a=5,b=6;fn(a,b);
```

### Options

You can also pass options to `minify`. Here is list of default options:

```js
({
    quotes: `'`,
    fixCount: 1, // the more fixCount - less output size
    conditions: false,
    mangleClassNames: true,
    mangle: true,
    mergeVariables: true,
    removeUnusedVariables: false,
    removeConsole: false,
    removeUselessSpread: true,
    applyTemplateLiterals: true,
    convertStrictEqualToEqual: false,
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
    removeUnusedVariables: false,
});
```

### How it's compared to X(your benchmark)?

[Benchmark](https://github.com/putoutjs/minify/tree/master/benchmark)

## License

MIT
