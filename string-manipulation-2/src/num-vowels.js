/* exported numVowels */
/*
- defined a function that takes in a string and returns the number of vowels
- assigned an empty array for our vowels to the variable numVowelsArray
- assigned the lower case version of the string to the variable lowerCase so we can compare the strings to the vowels later
- created a for loop to loop through every character of thes string
- if the lower case version of the character (i) of the string is equal to the lower case version of the vowel
- push it in our numVowelsArray
- following our conditional, return the length of the numVowelsArray to give us the number of vowels in the array
*/

function numVowels(string) {
  var numVowelsArray = [];
  var lowerCase = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (lowerCase.charAt(i) === 'a' || lowerCase.charAt(i) === 'e' || lowerCase.charAt(i) === 'i' || lowerCase.charAt(i) === 'o' || lowerCase.charAt(i) === 'u') {
      numVowelsArray.push(lowerCase.charAt(i));
    }
  }
  return numVowelsArray.length;
}
