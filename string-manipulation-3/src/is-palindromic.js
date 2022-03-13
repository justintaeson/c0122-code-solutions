/* exported isPalindromic */
/*
- defined a function that checks if a string is palindromic
- created an array called reverseArray to store each letter of the parameter string
- created an array called stringArray to store each letter of the parameter string
- created a for loop through the parameter string
- an if statement is created to check if the letter of the parameter string is not a space
- as long as the letter of the parameter string at the current index is not a space, the current letter is pushed into reverseArray
- it's also pushed into the stringArray
- after the loop is finished, reverseArray is reversed
- an if stament is created to check if the reverseArray is equal to stringArray both being concatenated a string
- if the strings are equal to each other, the boolean true is returned
- otherwise, the boolean false is returned
*/

function isPalindromic(string) {
  var reverseArray = [];
  var stringArray = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      reverseArray.push(string[i]);
      stringArray.push(string[i]);
    }
  }
  reverseArray.reverse();
  if (reverseArray.join('') === stringArray.join('')) {
    return true;
  } else {
    return false;
  }
}
