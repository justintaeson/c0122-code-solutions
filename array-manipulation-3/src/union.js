/* exported union */

/*
- defined a function that looks at two arrays and returns an array with unique values from both arrays
- create an empty array to store our unique values onto the varialbe finalArray
- loop through the first array
- add the value of the first array at the current index onto finalArray
- loop through the second array
- if the value of second at the current index is not found in the first array...
- add the value of the second array at the current index onto finalArray
- return the value of finalArray
*/

function union(first, second) {
  var finalArray = [];
  for (let i = 0; i < first.length; i++) {
    finalArray.push(first[i]);
  }

  for (let i = 0; i < second.length; i++) {
    if (first.includes(second[i]) === false) {
      finalArray.push(second[i]);
    }
  }
  return finalArray;
}
