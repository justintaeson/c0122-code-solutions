/* exported capitalizeWord */
/*
- defined a function to return the inputted word with this first character uppercase and remaining chracters lowercased with the exception of JavaScript
- made the inputted word into all lowercase so we can check to see if the inputted word is 'javascript' and then we assigned the result of the method to the variable lowerCase
- if the inputted word (in lower case) is indeed 'javascript'
- return the word with the 'J' & 'S' capitalized
- otherwise, return the inputted word with just the first character capitalized
*/

function capitalizeWord(word) {
  var lowerCase = word.toLowerCase();
  if (lowerCase === 'javascript') {
    return 'JavaScript';
  } else {
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1, word.length);
  }
}
