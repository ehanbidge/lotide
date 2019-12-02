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

function flatten(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {

    if (Array.isArray(arr[i]) === true) {
  
      for (indx in arr[i]) {
        newArr.push(arr[i][indx]);
      } 

    } else {
        newArr.push(arr[i]);
    }
  }
  return newArr;
}



console.log(flatten([1, 2, [3, 4], 5, [6]]));flatten