/* exported removeNext */

function removeNext(list) {
  if (list.next) {
    const trailingNodes = list.next.next;
    list.next = trailingNodes;
  }
}
