/* exported reverseWords */
/*
- defined a function that reverses the word that's given
- created an final array to store all our words once it's been modified
- created another array so we can store our words in there and reverse it
- added a space to the end of the string so we can modify the words before a space
- created a for loop to as many times as the length of the inputted string
- if the string at i, is not a space...
- push that character into the modify array
- else, if the string at i is a space...
= reverse the modify array which should have a set of characters that make up a word
- join words together by its separator and push it to the final Array
- once the loop is over, join finalArray at its separator, add a space, and then return it

*/

function reverseWords(string) {
  var finalArray = [];
  var modifyArray = [];
  string = string + ' ';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      modifyArray.push(string[i]);
    } else {
      modifyArray.reverse();
      finalArray.push(modifyArray.join(''));
      modifyArray = [];
    }
  }
  return finalArray.join(' ');
}
