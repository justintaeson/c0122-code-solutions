/* exported ransomCase */
/*
- defined a function to return a string every-other character uppercased
- created an empty array to store each character of the string and assigned it to the variable ransomCaseArray
- created a for loop to iterate through every character of the inputted string
- if i is 0 or even
- make sure the character at index i (0 or even) is lowercased and assign it to the variable 'lowerCaseLetter'
- then push that character into the ransomCaseArray
- otherwise...
- make sure the character at index i (odd) is uppercased and assign it to the variable 'upperCaseLetter'
- then push that character into the ransomCaseArray
- return the array by joining them at the separator (,) */

function ransomCase(string) {
  var ransomCaseArray = [];
  for (let i = 0; i < string.length; i++) {
    if (i === 0 || i % 2 === 0) {
      var lowerCaseLetter = string.charAt(i).toLowerCase();
      ransomCaseArray.push(lowerCaseLetter);
    } else {
      var upperCaseLetter = string.charAt(i).toUpperCase();
      ransomCaseArray.push(upperCaseLetter);
    }
  }
  return ransomCaseArray.join('');
}
