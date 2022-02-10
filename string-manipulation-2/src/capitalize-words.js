/* exported capitalizeWords */
/*
- defined a function to captialize the start of every wored
- created an empty array to store the characters of our string
- created a for loop to loop through the characters of the string
- if i is equal to 0
- push and capitalize the string at index i into our array
- if the character before the current index of the string is a space
- capitalize that word and push it to our array
- otherwise,
- push the string into the array in lowercase
- return the array without the separators
*/

function capitalizeWords(string) {
  var capitalizeWordsArray = [];
  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      capitalizeWordsArray.push(string.charAt(i).toUpperCase());
    } else if (string.charAt(i - 1) === ' ') {
      capitalizeWordsArray.push(string.charAt(i).toUpperCase());
    } else {
      capitalizeWordsArray.push(string.charAt(i).toLowerCase());
    }
  }
  return capitalizeWordsArray.join('');
}
