const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F600)} Assertion passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

function head(array){
  if (array.length === 0)
    return ("undefined");
  else
    return array.shift();
}

assertEqual(head(''), 'undefined');
assertEqual(head([5,6,7]), [6, 7]);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(head([5]), '');

