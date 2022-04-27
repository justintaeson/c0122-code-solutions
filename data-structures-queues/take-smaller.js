/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const frontValue = queue.dequeue();
  const secondValue = queue.dequeue();

  if (secondValue === undefined) {
    return frontValue;
  } else if (frontValue <= secondValue) {
    queue.enqueue(secondValue);
    return frontValue;
  }
  queue.enqueue(frontValue);
  return secondValue;
}
