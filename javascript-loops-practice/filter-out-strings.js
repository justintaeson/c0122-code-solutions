/* exported filterOutStrings */

function filterOutStrings(values) {
  var notStringsArray = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      notStringsArray.push(values[i]);
    }
  }
  return notStringsArray;
}
