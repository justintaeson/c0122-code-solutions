/* exported includes */
/*
- defined a function to return a boolean dependent on if 'value' is in 'array'
- created a for loop to loop through the values of the array
- if the value in array[i] matches the 'value'
- return the boolean true
- after the loop runs, if it doesn't return true, return false
*/

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
