/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const newNode = new LinkedList(value);
  if (!list.next) {
    return list.data;
  }
  let previousNode;
  while (list) {
    previousNode = list;
    list = list.next;
  }
  previousNode.next = newNode;
  return previousNode;
}
