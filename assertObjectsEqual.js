
const eqArrays = require('./eqArrays');

const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect; // <= add this line

  let keyList1 = Object.keys(actual);
  let keyList2 = Object.keys(expected);

  if (keyList1.length !== keyList2.length) {
    console.log(`Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
    return;
  }

  for (let i in actual) {
    if (typeof(actual[i]) !== typeof(expected[i])){
      console.log(`Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
      return;
    } else if (typeof(actual[i]) === 'object') {
        if (!eqArrays(actual[i], expected[i])) {
          console.log(`Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
        }
    } else if (actual[i] !== expected[i]) {
      console.log(`Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
        return;
    }
  }
  
  console.log(`${String.fromCodePoint(0x1F600)} Assertion passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  return true;
};

module.exports = assertObjectsEqual;


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); 

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false


/*
const a = { a: "1" };
assertObjectsEqual(eqObjects(ab, a), false); // => false

const n = {};
assertObjectsEqual(eqObjects(ab, n), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false); // => false
*/


