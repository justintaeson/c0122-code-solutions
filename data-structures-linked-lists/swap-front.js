/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const currentNode = list.data;
  const nextNode = list.next.data;
  list.data = nextNode;
  list.next.data = currentNode;
  return list;
}
