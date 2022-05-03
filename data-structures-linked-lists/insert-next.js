/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const newNode = new LinkedList(value);
  const oldNode = list.next;
  list.next = newNode;
  newNode.next = oldNode;
}
