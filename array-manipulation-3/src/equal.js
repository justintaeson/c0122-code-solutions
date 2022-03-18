/* exported equal */
/*
- defined a function to check if two arrays are equal to each other index by index
- if the two arrays aren't equal in length...
- automatically return false since they aren't equal to each other index by index
- created a forloop to loop through the arrays
- if the current index of the first array isn't equal to the current index of the second array...
- return false
- if the function hasn't stopped from the previous conditionals, return true
*/

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
