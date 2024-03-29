
/*
Implement the function findKeyByValue which takes in an object and a value.
It should scan the object and return the first key which contains the given value.
If no key with that given value is found, then it should return undefined.
*/

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(obj, value) {
  let valueList = Object.values(obj);
  let keyList = Object.keys(obj);

  for (let i = 0; i < valueList.length; i++) {
    //console.log(valueList[i], value);
    if (valueList[i] === value) {
      return keyList[i];
    }
  }
  return undefined;
};
