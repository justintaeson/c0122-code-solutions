/* exported maxValue */

function maxValue(stack) {
  let maxValue = -Infinity;
  while (stack.peek() !== undefined) {
    const topValue = stack.pop();
    if (topValue > maxValue) {
      maxValue = topValue;
    }
  }
  return maxValue;
}
