/* exported getKeys */
/*
- defined a function to get just the keys of an object
- create an empty array and assign it to the variable getKeysArray
- create a for in loop to iterate through the object
- push the key of the object into the getKeys array
- return the value of the array
*/

function getKeys(object) {
  var getKeysArray = [];
  for (const key in object) {
    getKeysArray.push(key);
  }
  return getKeysArray;
}
