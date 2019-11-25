// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F600) + "  Assertion passed: [" + actual + "] === [" + expected + "]");
  } else {
    console.log("  Assertion Failed: [" + actual + "] !== [" + expected + "]");
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 4);


