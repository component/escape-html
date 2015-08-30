/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

module.exports = escapeHtml;

var matchHtml = /["'&<>]/;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} str The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(html) {
  html = '' + html;
  var regexResult = matchHtml.exec(html);
  if (!regexResult) return html;

  var result = '';
  var i, lastIndex = 0, escape;
  for (i = regexResult.index; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 39: escape = '&#39;';  break;
      case 38: escape = '&amp;';  break;
      case 60: escape = '&lt;';   break;
      case 62: escape = '&gt;';   break;
      default:                    continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else                 return result;
}
