/* exported isAnagram */
/*
- defined a function that checks to see if 2 inputted strings are annagrams
- created an array for firstString
- created an array for secondString
- created a for loop to loop through firstString and remove all spaces
- created a for loop to loop through secondString and remove all spaces
- created an if statement to check if both sorted arrays that has been joined together equals each other
- if true, return true
- if false, return false
*/

function isAnagram(firstString, secondString) {
  var firstStringArray = [];
  var secondStringArray = [];

  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstStringArray.push(firstString[i]);
    }
  }

  for (let j = 0; j < secondString.length; j++) {
    if (secondString[j] !== ' ') {
      secondStringArray.push(secondString[j]);
    }
  }
  if (firstStringArray.sort().join() === secondStringArray.sort().join()) {
    return true;
  } else {
    return false;
  }
}
