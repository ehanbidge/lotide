

function flatten(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {

    if (Array.isArray(arr[i]) === true) {
  
      for (indx in arr[i]) {
        newArr.push(arr[i][indx]);
      } 

    } else {
        newArr.push(arr[i]);
    }
  }
  return newArr;
}
