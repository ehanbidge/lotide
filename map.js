/*
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.
*/

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

const words = ["ground", "control", "to", "major", "tom"];
const animals = ['cat', 'dog', 'bird'];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word[1]), [ 'r', 'o', 'o', 'a', 'o' ]);
assertArraysEqual(map(words, word => word.toUpperCase()), [ 'u', 't', 'j', 'o', 'l']);
assertArraysEqual(map(words, word => word.length), [ 6, 7, 2, 5, 2 ]);

assertArraysEqual(map(words, word => word[0]), [ 'g', 'm', 't']);
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't', 'e']);


/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F600)} Assertion passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
*/
