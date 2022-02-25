/* exported pick */
/*
- a function is defined with 2 parameters: source (object) & keys (array)
- in the function, we have an empty object assigned to the variable
'finalObject' to store the values we want
- a for in loop is created to loop through the properties of the inputted
object
- if the keys array includes the property,
- create a property in the finalObject object with a value of the matched
property in the source object
- return finalObject
*/

function pick(source, keys) {
  var finalObject = {};
  for (var key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      finalObject[key] = source[key];
    }
  }
  return finalObject;
}
