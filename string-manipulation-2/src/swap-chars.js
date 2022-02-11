/* exported swapChars */
/*
- defined a function to return a string with the first index and second index swapped
- created an empty variable to store the characters of our string and assigned it to a variable
- created a for loop to loop through all the characters of the string
- created a conditional to check if i is equal to 'first index'
- if so push the string at 'second index' into the array since we're swapping places
- similary, if i is equal to 'second index'
- push the string at 'first index' into the array
- if i doesn't equal either parameters, just push the string at i into our array
- return the values of swapCharsArray with the seperators removed
*/

function swapChars(firstIndex, secondIndex, string) {
  var swapCharsArray = [];
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swapCharsArray.push(string.charAt(secondIndex));
    } else if (i === secondIndex) {
      swapCharsArray.push(string.charAt(firstIndex));
    } else {
      swapCharsArray.push(string.charAt(i));
    }
  }
  return swapCharsArray.join('');
}
