

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


