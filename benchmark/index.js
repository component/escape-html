
/**
 * Globals for benchmark.js
 */
var lib = require('..')
global.escapeHtml = lib.escapeHtml
global.escapeHtmlFast = lib.escapeHtmlFast
global.escapeHtmlNoRegex = lib.escapeHtmlNoRegex

/**
 * Module dependencies.
 */
var benchmark = require('benchmark')
var benchmarks = require('beautify-benchmark')
var fs = require('fs')
var hugeHTML = fs.readFileSync("mathematica.html").toString()

const MIN_SAMPLES = 3

for (var dep in process.versions) {
  console.log('  %s@%s', dep, process.versions[dep])
}

console.log('')

var suite = new benchmark.Suite()
const fn = function() { escapeHtmlFast(str) }

// suite.add({
//   'name': 'no special characters',
//   'minSamples': MIN_SAMPLES,
//   'fn': function() { escapeHtml(str) },,
//   'setup': function() { str = "Hello, World!" }
// })

// suite.add({
//   'name': 'no special characters (large)',
//   'minSamples': MIN_SAMPLES,
//   'fn': function() { escapeHtml(str) },,
//   'setup': function() { str = "Hello, World!".repeat(1000) }
// })


suite.add({
  'name': 'Long HTML page',
  'minSamples': MIN_SAMPLES,
  'fn': function() { escapeHtml(hugeHTML) },
})

suite.add({
  'name': 'Long HTML page REGEX',
  'minSamples': MIN_SAMPLES,
  'fn': function() { escapeHtmlFast(hugeHTML) },
})

suite.add({
  'name': 'Short HTML page',
  'minSamples': MIN_SAMPLES,
  'fn': function() { escapeHtml(hugeHTML.substring(1,30000)) },
})

suite.add({
  'name': 'Short HTML page REGEX',
  'minSamples': MIN_SAMPLES,
  'fn': function() { escapeHtmlFast(hugeHTML.substring(1,30000)) },
})


suite.add({
  'name': 'single special character',
  'minSamples': MIN_SAMPLES,
  'fn': function() { escapeHtml(str) },
  'setup': function() { str = "Hello, World&!" }
})

suite.add({
  'name': 'single special character REGEX',
  'minSamples': MIN_SAMPLES,
  'fn': function() { escapeHtmlFast(str) },
  'setup': function() { str = "Hello, World&!" }
})

suite.add({
  'name': 'single special character (large)',
  'minSamples': MIN_SAMPLES,
  'fn': function() { escapeHtml(str) },
  'setup': function() {
    str = "Hello, World!".repeat(500)
      + "&"
      + "Hello, World!".repeat(500)
  }
})

suite.add({
  'name': 'single special character (large) REGEX',
  'minSamples': MIN_SAMPLES,
  'fn': function() { escapeHtmlFast(str) },
  'setup': function() {
    str = "Hello, World!".repeat(500)
      + "&"
      + "Hello, World!".repeat(500)
  }
})


suite.add({
  'name': 'many special characters',
  'minSamples': MIN_SAMPLES,
  'fn': function() { escapeHtml(str) },
  'setup': function() { str = '\'>\'\\"\\"&>h<e>&<y>"' }
})

suite.add({
  'name': 'many special characters REGEX',
  'minSamples': MIN_SAMPLES,
  'fn': function() { escapeHtmlFast(str) },
  'setup': function() { str = '\'>\'\\"\\"&>h<e>&<y>"' }
})

suite.add({
  'name': 'many special characters NO REGEX',
  'minSamples': MIN_SAMPLES,
  'fn': function() { escapeHtmlNoRegex(str) },
  'setup': function() { str = '\'>\'\\"\\"&>h<e>&<y>"' }
})


suite.add({
  'name': 'many special characters (large)',
  'minSamples': MIN_SAMPLES,
  'fn': function() { escapeHtml(str) },
  'setup': function() { str = '\'>\'\\"\\"&>h<e>&<y>"'.repeat(1000) }
})

suite.add({
  'name': 'many special characters (large) REGEX',
  'minSamples': MIN_SAMPLES,
  'fn': function() { escapeHtmlFast(str) },
  'setup': function() { str = '\'>\'\\"\\"&>h<e>&<y>"'.repeat(1000) }
})

suite.add({
  'name': 'many special characters (large) NO REGEX',
  'minSamples': MIN_SAMPLES,
  'fn': function() { escapeHtmlNoRegex(str) },
  'setup': function() { str = '\'>\'\\"\\"&>h<e>&<y>"'.repeat(1000) }
})


suite.on('cycle', function onCycle (event) {
  benchmarks.add(event.target)
})

suite.on('complete', function onComplete () {
  benchmarks.log()
})

suite.run({ 'async': false, maxTime: 0.001 })
