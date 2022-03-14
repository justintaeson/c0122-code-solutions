/* exported unique */
/*
- define a function that looks at an array and returns only the unique elements in an array
- create an empty array and assign it to the variable filteredArray
- loop through the parameter array
- if filteredArray does not include the value of array at the current index
- push the value of array at the curren index into filteredArray
- after the loop has finished executing, return filteredArray
*/

function unique(array) {
  var filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!filteredArray.includes(array[i])) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}
