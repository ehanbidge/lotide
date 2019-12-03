// take in two arrays and console.log an appropriate message to the console as to whether or not they are equal
const eqArrays = require('./eqArrays.js');


/*
const assertArraysEqual = function(array1, array2) {

  if (array1.length !== array2.length) {
    console.log(`Assertion Failed: [${array1.toString()}] !== [${array2.toString()}]`);
    return;
  }
  for (let i in array1) {
    if (array1[i] !== array2[i]) {
      console.log(`Assertion Failed: [${array1.toString()}] !== [${array2.toString()}]`);
      return;
    }
  }
  console.log(`${String.fromCodePoint(0x1F600)} Assertion passed: [${array1.toString()}] === [${array2.toString()}]`);

};
*/

const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1, array2)) {
    console.log(`${String.fromCodePoint(0x1F600)} Assertion passed: [${array1.toString()}] === [${array2.toString()}]`);
    return;
  } else {
    console.log(`Assertion Failed: [${array1.toString()}] !== [${array2.toString()}]`);
  }
};

module.exports = assertArraysEqual;