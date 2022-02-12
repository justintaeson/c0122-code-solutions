/* exported includes */
/*
- defined a function to return a boolean dependent on if 'value' is in 'array'
- created an empty array to store the 'value' that is/are in the 'array'
- created a for loop to loop through the values of the array
- if the value in array[i] matches the 'value'
- push that value into includesArray
- after the for loop, if includesArray has one or more of the values,
- return the boolean true
- else, return the boolean false
*/

function includes(array, value) {
  var includesArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      includesArray.push(array[i]);
    }
  }
  if (includesArray.length >= 1) {
    return true;
  } else {
    return false;
  }
}
