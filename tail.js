
let tail = function(array) {
  if (array.length === 0) {
    return ("undefined");
  } else {
    return array.slice(1);
  }
};

module.exports = tail;