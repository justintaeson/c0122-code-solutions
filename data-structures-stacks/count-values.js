/* exported countValues */

function countValues(stack) {
  let counter = 0;
  while (stack.pop() !== undefined) {
    counter = counter + 1;
  }
  return counter;
}
