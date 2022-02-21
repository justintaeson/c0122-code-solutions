/* exported take */
/*
- defined a function to return the first 'count' elements of 'array'
- created an empty array called takeArray
- if the 'array' is empty, return takeArray aka an empty array
- created a for loop to loop through all values of 'array' until it's i is equal to count
- push the value at i into our takeArray array
- return the values inside takeArray
*/

function take(array, count) {
  var takeArray = [];
  if (array.length === 0) {
    return takeArray;
  }
  for (let i = 0; i < count; i++) {
    takeArray.push(array[i]);
  }
  return takeArray;
}
