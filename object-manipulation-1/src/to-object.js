/* exported toObject */
/*
- defined a function to return a key value pair in an object from an inputted array with 2 elements
- assigned an empty object called toObjectArray
- assigned index[0] to a new variable called newKey
- assign the value of newKey as the key within the toObjectArray and the next index over as the value of the object
- return the toObjectObject object ;)
*/

function toObject(keyValuePair) {
  var toObjectObject = {};
  var newKey = keyValuePair[0];
  toObjectObject[newKey] = keyValuePair[1];
  return toObjectObject;
}
