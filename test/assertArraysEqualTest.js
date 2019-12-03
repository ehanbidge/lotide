// const eqArrays = require('../eqArrays.js');
const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
assertArraysEqual(['one', 'two', 'three'], ['one', 'two', 'three']);
assertArraysEqual([1, 2, 3, 4], [1]);


assertArraysEqual([1, 2, 3], [1, 3, 3]); // => should PASS
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2], [1, 2, 3]); // => should PASS
