var natural = require('natural')
var soundex = natural.SoundEx
var metaphone = natural.Metaphone

var word01 = "sheep"
var word02 = "ship"

console.log(`SoundEx: ${soundex.compare(word01, word02)}`)

console.log(`Metaphone: ${metaphone.compare(word01, word02)}`)

