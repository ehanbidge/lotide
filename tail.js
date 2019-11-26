/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F600)} Assertion passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};*/

const assertEqual = function(actual, expected) {
  let same = true;
  if (actual.length !== expected.length) {
    same = false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        same === false;
      }
    }
  }
  if (same === true) {
    console.log(`${String.fromCodePoint(0x1F600)} Assertion passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
   

let tail = function(array) {
  if (array.length === 0) {
    return ("undefined");
  } else {
    return array.slice(1);
  }
};

assertEqual(tail(''), 'undefined');
assertEqual(tail([5,6,7]), [6, 7]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail([5]), '');

