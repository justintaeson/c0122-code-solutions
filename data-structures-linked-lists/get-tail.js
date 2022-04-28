/* exported getTail */

function getTail(list) {
  if (!list.next) {
    return list.data;
  }
  let previousNode = list.data;
  while (list) {
    previousNode = list.data;
    list = list.next;
  }
  return previousNode;
}
