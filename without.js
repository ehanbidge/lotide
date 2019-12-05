
function without(source, remove) {
  let newArray = [];
  for (i = 0; i < source.length; i++) {
    for (item of remove) {
      if (source[i] !== item) {
        newArray.push(source[i]);
      }
    }
  }
  return newArray;
}
