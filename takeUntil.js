

/*
It will take in two parameters as well:

The array to work with
The callback (which Lodash calls "predicate")

Implement takeUntil which will keep collecting items from a provided array until 
the callback provided returns a truthy value.
*/


const takeUntil = function(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i);
    }
  }
  return array.slice(0, i);
  console.log('made it to the end of the array')
}



