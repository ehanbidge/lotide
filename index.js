/ index.js

const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const without = require('./without');
const takeUntil = require('./takeUntil');
const map = require('./map');
const letterPositions = require('./letterPositions');
const flatten = require('./flatten');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');

/*

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  without: without,
  takeUntil: takeUntil,
  map:      map,
  letterPositions: LetterPositions,
  flatten:  this.flatten,
  findKeyByValue: findKeyByValue,
  findKey:  findKey,
  eqOjects: eqOjects,
  eqArrays: eqArrays,
  countOnly; countOnly,
  countLetters: countLetters
};
*/


module.exports = {
  head,
  tail,
  middle,
  without,
  takeUntil,
  map,
  LetterPositions,
  flatten,
  findKeyByValue,
  findKey,
  eqOjects,
  eqArrays,
  countOnly,
  countLetters
};

