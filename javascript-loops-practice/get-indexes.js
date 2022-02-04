/* exported getIndexes */
function getIndexes(array) {
  var index = 0;
  var indexArray = [];
  for (let i = 0; i < array.length; i++) {
    index = array.indexOf(array[i]);
    indexArray.push(index);
  }
  return indexArray;
}
