/* exported isVowel */
/*
- defined a function to determine if the paramter 'char' is a vowel.
- lower cased the input 'char' and assigned it to a variable so we can compare later.
- created an if statement to check the lowerCasedCharacter against all vowels (lowercased).
- if lowerCasedCharacter matches a vowel, return true.
- else, return false.
*/

function isVowel(char) {
  var lowerCasedCharacter = char.toLowerCase();
  if (lowerCasedCharacter === 'a' || lowerCasedCharacter === 'e' || lowerCasedCharacter === 'i' || lowerCasedCharacter === 'o' || lowerCasedCharacter === 'u') {
    return true;
  } else {
    return false;
  }
}
