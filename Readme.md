
# escape-html

  Escape HTML special characters (syntax), replacing them with character references.

## Example

```js
var escape = require('escape-html');
escape('<meta content="\'a\' & b" />');
// &lt;meta content=&quot;&#39;a&#39; &amp; b&quot; /&gt;
```

## License

  MIT