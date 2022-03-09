/* exported reverseWords */

function reverseWords(string) {
  var reverseArray = [];
  for (let i = 0; i < string.length; i++) {
    reverseArray.unshift(string[i]);
  }
}
