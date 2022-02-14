/* exported takeRight */

/*
- defined a function to return a new array containing the last count elements of array
- created an empty array to store the characters we need
- created an if statement to check if values are stored in the array
- if the there is no value, return an empty array
- cretaed an if statement to see if count is higher than the number of values in the array
- if count is higher, just return the array as is
- otherwise,
- go through all the values of the array starting from the last value down
- and push that value into takeRightArray
- since we put the values in takeRightArray in reverse order, reverse the values
- and return the values of takeRightArray
*/

function takeRight(array, count) {
  var takeRightArray = [];
  if (array.length === 0) {
    return takeRightArray;
  } else if (count > array.length) {
    return array;
  } else {
    for (let i = (array.length - count); i < array.length; i++) {
      takeRightArray.push(array[i]);
    }
  }
  return takeRightArray;
}
