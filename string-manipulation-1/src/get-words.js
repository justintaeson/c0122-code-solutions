/* exported getWords */
/*
- defined a function to get words from a string and put them into an array separated by words
- created an empty array so we can call it incase the parameter (input) is not a string; in this case the only other option is blank
- created an if statement to match the string input against a blank string
- if it isn't a blank string, return the string but split by its words in an array
- otherwise, return the variable emptyArray to show that a blank string was inputted
*/

function getWords(string) {
  var emptyArray = [];
  if (string !== '') {
    return string.split(' ');
  } else {
    return emptyArray;
  }
}
