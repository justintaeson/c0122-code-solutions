/* exported lastChars */
/*
- defined a function to return the last 'length' amount of characters
- created an empty array to store the chracters we're going to return
- created a for loop to loop through every character starting at length of the string
- if the i is greater than the length of the string minus 'length' (aka 'length' character from the last word)
- push the character at that index minus 1 since array index starts at 0 into the array
- since we put the characters into the array backwards, reverse the array
- return the values of lastCharsArray with the seperators removed
*/

function lastChars(length, string) {
  var lastCharsArray = [];
  for (let i = string.length; i > (string.length - length); i--) {
    lastCharsArray.push(string.charAt(i - 1));
  }
  lastCharsArray.reverse();
  return lastCharsArray.join('');
}
