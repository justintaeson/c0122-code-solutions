/* exported drop */
/*
- defined a function to return the values of the array after the first 'count' elements
- created an empty array to store the values of 'array' that we need
- created a for loop to loop through all the values of 'array'
- if array[i] is greater than or equal to count (since we want everything after array[count-1])
- push array[i] into dropArray
- return dropArray
*/

function drop(array, count) {
  var dropArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i >= count) {
      dropArray.push(array[i]);
    }
  }
  return dropArray;
}
