/* exported firstChars */
/*
- defined a function to return the string based up through the inputted length
- created an empty variable to store the chracters we need and assigned it to the variable firstCharsArray
- created a for loop to loop through all the strings
- created a condition to check and see if i is less than length; this is so we can grab all the character up until the length amount
- if the i is less than the given length, push the chracter at that index (i) to the firstCharArray
- return the value of the array with the characters joined by the separators
*/

function firstChars(length, string) {
  var firstCharsArray = [];
  for (let i = 0; i < string.length; i++) {
    if (i < length) {
      firstCharsArray.push(string.charAt(i));
    }
  }
  return firstCharsArray.join('');
}
