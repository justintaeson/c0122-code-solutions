/* exported getValues */
/*
-defined a function to get spit out just the values (no keys) based on the inputted object
- assigned an empty array so we can call on it later called emptyArray
- created a for in loop to iterate through the object
- push the value of the key into the array
- return the value of the array
*/

function getValues(object) {
  var emptyArray = [];
  for (const key in object) {
    emptyArray.push(object[key]);
  }
  return emptyArray;
}
