

// function eqArrays which takes in two arrays and returns true or false, based on a perfect match.


const eqArrays = function(arry1, arry2) {
  if (arry1.length !== arry2.length) {
   return false;
  }
  for (let i of arry1) {
    if (arry1[i] !== arry2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
