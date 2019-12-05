

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



