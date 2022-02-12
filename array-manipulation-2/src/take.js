/* exported take */
/*
- defined a function to return the first 'count' elements of 'array'
- created an empty array called takeArray
- created a for loop to loop through all values of 'array'
- if index (i) is less than 'count'
- push the value at i into our takeArray array
- return the values inside takeArray
*/

function take(array, count) {
  var takeArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i < count) {
      takeArray.push(array[i]);
    }
  }
  return takeArray;
}
