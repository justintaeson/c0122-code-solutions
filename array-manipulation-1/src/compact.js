/* exported compact */
/*
- defined a functin to check if all the inputs are truthy values or falsy values
- assigned an empty array to the variable emptyArray
- created a for loop to loop through the array the same amount of times as the lengtht of the array
- if the input is a truthy value
- push the value into our emptyArray
- return the values of emptyArray to close out the function
*/

function compact(array) {
  var emptyArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      emptyArray.push(array[i]);
    }
  }
  return emptyArray;
}
