/* exported zip */
/*
- defined a function that returns an array with sub arrays containing the values in 2 arrays at the same index
- assigned the return of the sameLengthArrays function to the variable twoLevelArray
- assigned the value of twoLevelArray's first index (the original first parameter array adjusted to the length of the shorter array) to the variable modifiedFirst
- assigned the value of twoLevelArray's second index to the variable modifiedSecond (the original second parameter array adjusted to the length of the shorter array) to the variable modifiedSecond

- created an empty array to store the sub arrays called packageArray
- created a for loop to loop through the modifiedFirst array (can choose either arrays for the length since they're now same in lenght)
- every iteration, create an empty array to create our sub arrays
- push the value of modifiedFirst at the current index into packageArray
- push the value of mofifiedSecond at the current index into packageArray
- push the value of packageArray into finalArray
- once the loop has finished, return the value of finalArray
*/

function zip(first, second) {
  var twoLevelArray = sameLengthArrays(first, second);
  var modifiedFirst = twoLevelArray[0];
  var modifiedSecond = twoLevelArray[1];

  var finalArray = [];
  for (let i = 0; i < modifiedFirst.length; i++) {
    var packageArray = [];
    packageArray.push(modifiedFirst[i]);
    packageArray.push(modifiedSecond[i]);
    finalArray.push(packageArray);
  }
  return finalArray;
}

/*
- defined a function to return the parameter arrays at the same length adjusting to the smaller array length
- store the smallest number between the length of first and second using the Math.min() method to the variable length
- store a new array to create a new updated array for first into the const variable firstClone
- store a new array to create a new updated Array for second into the const variable secondClone
- loop through length
- push the value of first at the current index into firstClone
- push the value of second at the current index into secondClone
- return an array with the values of firstClone and second clone inside
*/

function sameLengthArrays(first, second) {
  var length = Math.min(first.length, second.length);
  const firstClone = [];
  const secondClone = [];
  for (let i = 0; i < length; i++) {
    firstClone.push(first[i]);
    secondClone.push(second[i]);
  }
  return [firstClone, secondClone];
}
