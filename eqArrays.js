const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F600)} Assertion passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


// function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

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

console.log(eqArrays("1, 2, 3, 4", "1, 2, 3, 4"));
console.log(eqArrays("1, 2, 3, 4", "1, 2, 3, 4, 5"));
console.log(eqArrays("1, 2, 3, 4", "1, 5, 3, 4"));
console.log(eqArrays("1, 2, 3, 4", "1, 2, 3, 4"));

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 3, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => should PASS