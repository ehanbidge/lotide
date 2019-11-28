const assertArraysEqual = function(array1, array2) {
 
  if (array1.length !== array2.length) {
    console.log(`Assertion Failed: [${array1.toString()}] !== [${array2.toString()}]`);
    return;
  }
  for (let i in array1) {
    if (array1[i] !== array2[i]) {
      console.lot('elements not equal')
      console.log(`Assertion Failed: [${array1.toString()}] !== [${array2.toString()}]`);
      return;
    }
  }
  console.log(`${String.fromCodePoint(0x1F600)} Assertion passed: [${array1.toString()}] === [${array2.toString()}]`);

};


/*
It will take in two parameters as well:

The array to work with
The callback (which Lodash calls "predicate")

Implement takeUntil which will keep collecting items from a provided array until 
the callback provided returns a truthy value.
*/


const takeUntil = function(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i);
    }
  }
  return array.slice(0, i);
  console.log('made it to the end of the array')
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');



assertArraysEqual(takeUntil(data2,x => x === ',' ), ["I've", "been", "to", "Hollywood"]); // => should PASS
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]); // => should PASS
assertArraysEqual(takeUntil(data1, x => x > 0), []); // => should PASS

