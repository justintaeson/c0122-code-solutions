/* exported invert */
/*
- defined a function to invert the property and value in an object
- created an empty object to store our key-value pairs
- created a for in loop to loop through the properties in the 'source' object
- assigned the value each property within the source object to the variable 'value'
- create a property in the finalObject object with the property and value switched
- return the object
*/

function invert(source) {
  var finalObject = {};
  for (const key in source) {
    var value = source[key];
    finalObject[value] = key;
  }
  return finalObject;
}
