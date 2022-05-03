/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const topValue = stack.pop();
  if (topValue === undefined) {
    return undefined;
  }
  const secondValue = stack.peek();
  stack.push(topValue);
  return secondValue;
}
