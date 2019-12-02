
function head(array){
  if (array.length === 0)
    return ("undefined");
  else
    return array.shift();
}

module.exports = head;