/* exported findIndex */

function findIndex(array, value) {
  // assigned a variable to 0 so we can assign the result of the for loop and if statement here later
  var index = 0;
  // created a for loop to check all the numbers in the array
  for (let i = 0; i < array.length; i++) {
    // created an if statement to check if each number in the array matches the value
    /// if the number in the array is equal to the value, the if statement will assign the variable index to 'i' which is the current index
    if (array[i] === value) {
      index = i;
      break;
    } else {
      index = -1;
    }
  }
  return index;
}
