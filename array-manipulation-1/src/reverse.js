/* exported reverse */
/*
- defined a function to return us a reversed version of the inputted array
- assigned an empty array for us to throw the values in the array in backwards order called reverseArray
- created a for loop to loop through the values in the array but starting from the last value of the array
- within the for loop, the value will be pushed to our reverseArray array
- lasty, the function will return the value of the reverseArray which will end the function
*/

function reverse(array) {
  var reverseArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}
