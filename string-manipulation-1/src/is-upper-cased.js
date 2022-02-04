/* exported isUpperCased */
/*
- defined a function to determine if the word being inputted is all upper cased.
- created an if statement to determine if the parameter 'word' being inputted matches the parameter 'word' but capitalized.
- if true, return the boolean value of true.
- if false, return the boolean value of false.
*/

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
