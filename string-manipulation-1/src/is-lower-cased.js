/* exported isLowerCased */
/*
- defined a function to determine if the word being inputted is all lower cased.
- created an if statement to determine if the parameter 'word' being inputted matches the parameter 'word' but in all lower case.
- if true, return the boolean value of true.
- if false, return the boolean value of false.
*/

function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
