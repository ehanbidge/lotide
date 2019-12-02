const tail = require('../tail.js');
const assertArraysEqual = require('../assertArraysEqual.js');


assertArraysEqual(tail(''), 'undefined');
assertArraysEqual(tail([5,6,7]), [6, 7]);
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertArraysEqual(tail([5]), '');