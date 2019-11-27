/*

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F600)} Assertion passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
*/
/* countLetters takes in a string and counts the number of occurances of letters. 
It returns an object with letter counts if greater than zero.*/

const countLetters = function(varstr) {
  let letterCount = {};

  for(let i of varstr) {
    //console.log(i);
    let sum = 0;
    for (let j = 0; j < varstr.length; j++) {
      //console.log(i === varstr[j], i != ' ');

      if ((i === varstr[j]) && (i != ' ')) {
        sum += 1;
      }
      if (sum > 0) {
        letterCount[i] = sum;
      }
      
    } 
  }
  console.log(letterCount);
  return letterCount;
}

countLetters("lighthouse in the house");