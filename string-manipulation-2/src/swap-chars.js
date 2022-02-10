/* exported swapChars */
/*
- defined a function to return a string with the first index and second index swapped
- created an empty variable to store the characters of our string and assigned it to a variable
- created a for loop to loop through all the characters of the string
- push all the characters of the string into our array
- after the for loop, swap the place of the indexes
- return the array while removing the separators
*/

function swapChars(firstIndex, secondIndex, string) {
  var swapCharsArray = [];
  for (let i = 0; i < string.length; i++) {
    swapCharsArray.push(string.charAt(i));
  }
  [swapCharsArray[firstIndex], swapCharsArray[secondIndex]] = [swapCharsArray[secondIndex], swapCharsArray[firstIndex]];

  return swapCharsArray.join('');
}
