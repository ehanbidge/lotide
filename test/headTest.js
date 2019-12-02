const head = require('../head.js');
const assertEqual = require('../assertEqual.js')

assertEqual(head(''), 'undefined');
assertEqual(head([5,6,7]), [6, 7]);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(head([5]), '');