
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F600)} Assertion passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// totalreps takes an array of strings and returns number of repes of second parameter string
const totalreps = function(ary, letter) {
  let sum = 0;
  for (let i = 0; i < ary.length; i++) {
    if (ary[i] === letter) {
      sum += 1;
    }
  }
  return sum;
};

// takes a list of strings and counts repetitions according to object specifications (true;false)
const countOnly = function(itemsArray, objOfParts) {

  const totalItems =  Object.keys(objOfParts);
  let neededItems = [];
  //console.log(totalItems, totalItems[0]);
  //console.log(objOfParts[totalItems[0]]);
  
 
  //find the items needed from the array given (take only true) and push to new array of needed items
  for(let j = 0; j < totalItems.length; j++) {
    if (objOfParts[totalItems[j]]) {
      neededItems.push(totalItems[j])
    }
  }

  // for the items that are needed to count, count them and return array
  const totalArray = {};
  for (let k = 0; k < neededItems.length; k++) {
    totalArray[neededItems[k]] = totalreps(itemsArray,neededItems[k])
  }
  return(totalArray);
  
};

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

console.log(result1);

/*
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

*/
// console.log(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": false}));







