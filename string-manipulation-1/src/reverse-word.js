/* exported reverseWord */
/*
- defined a function to reverse any string that's inputted as a parameter
- assigned a blank array to the reverseWordArray variable for to put characters in later
- create a for loop to go through eacg letter of string and put it in our empty array called reverseWordArray
- after the forloop has put all the characters in our array, the reverse method will reverse/flip all the letters in the array
- last but not least, the function will return the reverseWordArray array with the all characters in the array joined together giving us a reversed version of the string that was inputted.
*/

function reverseWord(word) {
  var reverseWordArray = [];
  for (let i = 0; i < word.length; i++) {
    reverseWordArray.push(word.charAt(i));
  }
  reverseWordArray.reverse();
  return reverseWordArray.join('');
}
