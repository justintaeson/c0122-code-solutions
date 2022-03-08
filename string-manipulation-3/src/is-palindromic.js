/* exported isPalindromic */

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
