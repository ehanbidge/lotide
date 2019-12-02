


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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
};