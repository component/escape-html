
# escape-html

  Escape string for use in HTML

## Example

```js
var escape = require('escape-html');
var html = escape('foo & bar');
// -> foo &amp; bar
```

## Benchmark

```
$ npm run-script bench

> escape-html@1.0.3 bench /Users/Nook/Workspace/escape-html
> node benchmark/index.js


  http_parser@2.5.0
  node@4.1.0
  v8@4.5.103.33
  uv@1.7.4
  zlib@1.2.8
  ares@1.10.1-DEV
  modules@46
  openssl@1.0.2d

  3 tests completed.

  no special characters    x 25,587,771 ops/sec ±0.92% (193 runs sampled)
  single special character x  8,018,991 ops/sec ±0.79% (194 runs sampled)
  many special characters  x  4,126,024 ops/sec ±0.83% (194 runs sampled)
```

## License

  MIT
