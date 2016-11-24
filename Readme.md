
# escape-html

  Escape string for use in HTML

This module exports a single function, `escapeHtml`, that is used to escape
a string of content such that it can be interpolated in HTML content.

This module will escape the following characters: `"`, `'`, `&`, `<`, and `>`.

**Note** that the escaped value is only suitable for being interpolated into
HTML as the text content of elements in which the tag does not have different
escaping mechanisms (it cannot be placed inside `<style>` or `<script>`, for
example, as those content bodies are not HTML, but CSS and JavaScript,
respectively; these are known as "raw text elements" in the HTML standard).

**Note** when using the escaped value within a tag, it is only suitable as
the value of an attribute, where the value is quoted with either a double
quote character (`"`) or a single quote character (`'`).

## Example

```js
var escapeHtml = require('escape-html');
var html = escapeHtml('foo & bar');
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
