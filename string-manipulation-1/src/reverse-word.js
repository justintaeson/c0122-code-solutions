/* exported reverseWord */
/*
- defined a function to reverse any string that's inputted as a parameter
- assigned a blank string to the emptyString variable to add character to it in our for loop
- create a for loop to go through each letter of string and add it to our emptyString variable
- last but not least, the function will return the emptyString variable with the all characters in the array joined together giving us a reversed version of the string that was inputted.
*/

function reverseWord(word) {
  var emptyString = '';
  for (let i = word.length; i >= 0; i--) {
    emptyString = emptyString + word.charAt(i);
  }
  return emptyString;
}
