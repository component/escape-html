/**
 * Escape special characters in the given string of html.
 *
 * @param  {String} html
 * @return {String}
 * @api private
 */
 
var entities = {
    "&": "&amp;",
    "\"": "&quot;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
};

module.exports = function(html) {
  var r = String(html);
  for (var key in entities) {
    r = r.replace(new RegExp(key, "g"), entities[key]);
  }
  return r;
};

module.exports.decode = function(html) {
  var r = String(html);
  for (var key in entities) {
    r = r.replace(new RegExp(entities[key], "g"), key);
  }
  return r;
};