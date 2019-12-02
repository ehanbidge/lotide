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


function without(source, remove) {
  let newArray = [];
  for (i = 0; i < source.length; i++) {
    for (item of remove) {
      if (source[i] !== item) {
        newArray.push(source[i]);
      }
    }
  }
  return newArray;
}


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);



const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]