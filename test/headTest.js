const head = require('../head.js');
const assertEqual = require('../assertEqual.js');
const assertArraysEqual = require('../assertArraysEqual.js')


assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 3, 3]); // => should not PASS
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]); // => should not PASS
assertArraysEqual([1, 2], [1, 2, 3]); // => should not PASS

