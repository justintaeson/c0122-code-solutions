/* exported dropRight */
/*
- defined a function to return all the values of 'array' before the last 'count' elements
- created an empty array to store the values of 'array' we need
- created a for loop to iterate through all the values of 'array' until it's less than the array length minus 'count' (aka the first value after of the last count elements)
- store the value of array[i] into our dropRightArray
- return dropRightArray
*/

function dropRight(array, count) {
  var dropRightArray = [];
  for (let i = 0; i < (array.length - count); i++) {
    dropRightArray.push(array[i]);
  }
  return dropRightArray;
}
