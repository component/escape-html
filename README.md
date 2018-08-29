# escape-html

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

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

> escape-html@1.0.3 bench nodejs-escape-html
> node benchmark/index.js


  http_parser@1.0
  node@0.10.33
  v8@3.14.5.9
  ares@1.9.0-DEV
  uv@0.10.29
  zlib@1.2.3
  modules@11
  openssl@1.0.1j

  1 test completed.
  2 tests completed.
  3 tests completed.

  no special characters    x 19,435,271 ops/sec ±0.85% (187 runs sampled)
  single special character x  6,132,421 ops/sec ±0.67% (194 runs sampled)
  many special characters  x  3,175,826 ops/sec ±0.65% (193 runs sampled)
```

## License

  MIT

[downloads-image]: https://img.shields.io/npm/dm/escape-html.svg
[downloads-url]: https://npmjs.org/package/escape-html
[npm-image]: https://img.shields.io/npm/v/escape-html.svg
[npm-url]: https://npmjs.org/package/escape-html
