const assertArraysEqual = function(array1, array2) {

  if (array1.length !== array2.length) {
    console.log(`Assertion Failed: [${array1.toString()}] !== [${array2.toString()}]`);
    return;
  }
  for (let i of array1) {
    if (array1[i] !== array2[i]) {
      console.log(`Assertion Failed: [${array1.toString()}] !== [${array2.toString()}]`);
      return;
    }
  }
  console.log(`${String.fromCodePoint(0x1F600)} Assertion passed: [${array1.toString()}] === [${array2.toString()}]`);

};

//It returns an object with letter positions in string */

const letterPositions = function(varstr) {

  let positions = {};

  for (let i of varstr) {
    let positionstr = [];
    for (let j = 0; j < varstr.length; j++) {
      if ((i !== ' ') && (i === varstr[j])) {
        positionstr.push(j);
      }
      if (positionstr !== "") {
        positions[i] = positionstr;
      }
      
    }
  }
  //console.log(positions);
  return positions;
  
};

//letterPositions("lighthouse in the house");

assertArraysEqual(letterPositions("Hello").H, [0]);
assertArraysEqual(letterPositions("Hello").e, [1]);
assertArraysEqual(letterPositions("Hello").l, [2, 3]);


