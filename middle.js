const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F600)} Assertion passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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


function middle(arr) {
  let mid = [];
  if (arr.length <= 2) {
    return mid;
  }
  else if (arr.length % 2 === 0) {
    mid.push(arr[arr.length / 2 - 1], arr[arr.length / 2]);
  }
  else {
    let mpt = 
    mid.push(arr[Math.floor(arr.length / 2)]);
  }
  return mid;
}

module.exports = middle;

