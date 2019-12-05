const tail = require('../tail.js');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [6, 7] for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });
});

describe("#tail", () => {
  it("returns [47] for [2, 47]", () => {
    assert.deepEqual(tail([2, 47]), [47]);
  });
});

describe("#tail", () => {
  it("returns [110, 111] for [109, 110, 111]", () => {
    assert.deepEqual(tail([109, 110, 111]), [110, 111]);
  });
});
