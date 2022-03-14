/* exported difference */
/*
- defined a function that compares two arrays then returns one array with only the unique characters from both arrays
- create an empty array and assign it to the variable finalArray
- loop through the first array
- if the value of first array at the current index was not inside the second array...
- push the value of first at the current index to finalArray
- loop through the second array
- if the value of second array at the current index was not inside the first array...
- push the value second at the current index to final Array
- return the value of finalArray
*/

function difference(first, second) {
  var finalArray = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === false) {
      finalArray.push(first[i]);
    }
  }
  for (let j = 0; j < second.length; j++) {
    if (first.includes(second[j]) === false) {
      finalArray.push(second[j]);
    }
  }
  return finalArray;
}
