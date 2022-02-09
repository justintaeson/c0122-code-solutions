/* exported initial */
/*
- defined a function to return the initial of the array (anything but the last value)
- assigned an empty array to the variable so we can throw the initial of the array into it
- created a for loop to loop through all the words in the array
- created an if statement to make sure the the last value of the array is not being included in our initialArray
- the code is pushing all the indexes of the array with the exception of the last index into the our initialArray
*/

function initial(array) {
  var initialArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    initialArray.push(array[i]);
  }
  return initialArray;
}
