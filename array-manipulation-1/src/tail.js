/* exported tail */
/*
- defined a function to return the tail of the array (anything but the first value)
- assigned an empty array to the variable so we can throw the tail of the array into it
- created a for loop to loop through all the words in the array
- created an if statement to make sure the the first word is not being included in our tailArray
- the code is pushing all the indexes of the array with the exception of index 0 into the our tailArray
*/

function tail(array) {
  var tailArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      tailArray.push(array[i]);
    }
  }
  return tailArray;
}
