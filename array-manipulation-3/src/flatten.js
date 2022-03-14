/* exported flatten */
/*
- defined a function that flattens an array by one level
- create an empty array to store the values from the parameter array
- loop through the parameter array
- if the value of the current index is an array...
- loop through that array
- push array at i index at the j index
- else...
- only push the value array at index i
- lastly, return flattenedArray
*/

function flatten(array) {
  var flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (let j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
}
