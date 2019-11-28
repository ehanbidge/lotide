const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F600)} Assertion passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const findKey = function(obj, func) {
  
  let keyList = Object.keys(obj);
  let objList = Object.values(obj);
  

  for (let i = 0; i < keyList.length; i++) {
    if (func(obj[keyList[i]])) {
    //console.log(valueList[i], value);
      return keyList[i];
    }
  }
  return 'undefined';
};

const obj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

findKey(obj1, x => x.stars === 2) // => "noma"

assertEqual(findKey(obj1, x => x.stars === 2), "noma");
assertEqual(findKey(obj1, x => x.stars === 1), "Blue Hill");

assertEqual(findKey(obj1, x => x.stars === 7), "undefined");
assertEqual(findKey(obj1, x => x.stars === 3), "Akaler");


