/* exported drop */
/*
- defined a function to return the values of the array after the first 'count' elements
- created an empty array to store the values of 'array' that we need
- created a for loop to loop through all the values of 'array' starting at 'index' and stopping if it's less than the length of the array
- push array[i] into dropArray
- return dropArray
*/

function drop(array, count) {
  var dropArray = [];
  for (let i = count; i < array.length; i++) {
    dropArray.push(array[i]);
  }
  return dropArray;
}
