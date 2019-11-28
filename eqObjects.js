const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F600)} Assertion passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {

  let keyList1 = Object.keys(object1);
  let keyList2 = Object.keys(object2);

  if (keyList1.length !== keyList2.length) {
    return false;
  }

  for (let i in object1) {
    if (typeof(object1[i]) !== typeof(object2[i])){
      return false;
    } else if (typeof(object1[i]) === 'object') {
        if (eqArrays(object1[i], object2[i])) {
          return true;
        }
      return false;
    } else {
        if (object1[i] !== object2[i]) {
        return false;
        }
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const a = { a: "1" };
assertEqual(eqObjects(ab, a), false); // => false

const n = {};
assertEqual(eqObjects(ab, n), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

