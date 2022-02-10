/* exported lastChars */
/*
- defined a function to return the last 'length' amount of characters
- created an empty array to store the chracters we're going to return
- created a for loop to loop through every character starting at 0
- if the index greater than or equal to the string length - length parameter (aka 'length' character from the last word)
- push the character at that index into the array
- join the characters in the array at its separators and return the value
*/

function lastChars(length, string) {
  var lastCharsArray = [];
  for (let i = 0; i < string.length; i++) {
    if (i >= (string.length - length)) {
      lastCharsArray.push(string.charAt(i));
    }
  }
  return lastCharsArray.join('');
}
