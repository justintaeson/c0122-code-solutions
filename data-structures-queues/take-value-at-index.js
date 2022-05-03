/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return;
  }
  let i = 0;
  while (i < index) {
    const frontValue = queue.dequeue();
    queue.enqueue(frontValue);
    i++;
  }
  const frontValue = queue.dequeue();
  return frontValue;
}
