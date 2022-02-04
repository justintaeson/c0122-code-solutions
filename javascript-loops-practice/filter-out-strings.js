/* exported filterOutStrings */

function filterOutStrings(values) {
  var numbersOnlyArray = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      numbersOnlyArray.push(values[i]);
    }
  }
  return numbersOnlyArray;
}
