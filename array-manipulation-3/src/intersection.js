/* exported intersection */
/*
- defined a function that compares two arrays and returns an array with valuues that intersected in the two arrays
- create a variable to store to values that are intersect and assign it to eh variable finalArray
- loop through the first array
- if the value of first at the current index is found inside the second array
- add the value of first to finalArray
- return the value of finalArray
*/

function intersection(first, second) {
  var finalArray = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === true) {
      finalArray.push(first[i]);
    }
  }
  return finalArray;
}
