

// function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
/*
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
*/


const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i of array1) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

/*
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 3, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2], [1, 2, 3]), false); // => should PASS
*/