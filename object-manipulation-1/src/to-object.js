/* exported toObject */
/*
- defined a function to return a key value pair in an object from an inputted array with 2 elements
- assigned an empty object called toObjectArray
- created a for loop to iterate through the array
- if the index of the element is either 0 or even
- assign the current index of keyValuePair to a new variable called newKey
- assign the value of newKey as the key key within the toObjectArray and the next index over as the value of the object
*/

function toObject(keyValuePair) {
  var toObjectArray = {};
  for (let i = 0; i < keyValuePair.length; i++) {
    if (i === 0 || i % 2 === 0) {
      var newKey = keyValuePair[i];
      toObjectArray[newKey] = keyValuePair[i + 1];
    }
  }
  return toObjectArray;
}
