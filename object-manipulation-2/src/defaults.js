/* eslint-disable no-prototype-builtins */
/* exported defaults */

/*
- defined a function that assigns properties of source object to the target object that aren't defined on target
- created a for in loop to loop through the source object
- if the target object does not have a property in the source object
- then create that property in the the target object with it's original value from the source object
*/

function defaults(target, source) {
  for (const property in source) {
    if (!target.hasOwnProperty(property)) {
      target[property] = source[property];
    }
  }
}
