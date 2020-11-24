/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */

'use strict'

/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/

/**
 * Module exports.
 * @public
 */

module.exports = { escapeHtml, escapeHtmlFast, escapeHtmlNoRegex }

/**
 * Escape special characters in the given string of text.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

var matchHtmlRegExpFast = /["'&<>]/g
function escapeHtmlFast (string) {
  var str = '' + string

  var lastIndex = 0
  var html = ''
  var escape = ''
  var match

  while (match = matchHtmlRegExpFast.test(str)) {
    switch (str.charCodeAt(matchHtmlRegExpFast.lastIndex-1)) {
      case 34: // "
        escape = '&quot;'
        break
      case 38: // &
        escape = '&amp;'
        break
      case 39: // '
        escape = '&#39;'
        break
      case 60: // <
        escape = '&lt;'
        break
      case 62: // >
        escape = '&gt;'
        break
    }
    // console.log(lastIndex, matchHtmlRegExpFast.lastIndex, str.length)
    html += str.substring(lastIndex, matchHtmlRegExpFast.lastIndex - 1)
    lastIndex = matchHtmlRegExpFast.lastIndex
    html += escape
  }
  return html + str.substring(lastIndex)
}

function escapeHtmlNoRegex (str) {
  // var str = '' + string
  // var match = matchHtmlRegExp.exec(str)

  // if (!match) {
  //   return str
  // }

  var escape
  var html = ''
  var index = 0
  var lastIndex = 0

  for (index = 0; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;'
        break
      case 38: // &
        escape = '&amp;'
        break
      case 39: // '
        escape = '&#39;'
        break
      case 60: // <
        escape = '&lt;'
        break
      case 62: // >
        escape = '&gt;'
        break
      default:
        continue
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index)
    }

    lastIndex = index + 1
    html += escape
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html
}

function escapeHtml (string) {
  var str = '' + string
  var match = matchHtmlRegExp.exec(str)

  if (!match) {
    return str
  }

  var escape
  var html = ''
  var index = 0
  var lastIndex = 0

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;'
        break
      case 38: // &
        escape = '&amp;'
        break
      case 39: // '
        escape = '&#39;'
        break
      case 60: // <
        escape = '&lt;'
        break
      case 62: // >
        escape = '&gt;'
        break
      default:
        continue
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index)
    }

    lastIndex = index + 1
    html += escape
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html
}
