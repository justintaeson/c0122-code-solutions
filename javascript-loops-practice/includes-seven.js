/* exported includesSeven */
function includesSeven(array) {
  var sevensOnlyArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      sevensOnlyArray.push(array[i]);
    }
  }
  if (typeof sevensOnlyArray[0] === 'number') {
    return true;
  } else {
    return false;
  }
}
