var $taskList = document.querySelector('ul');

function handleClick(event) {
  console.log('event.target:', event.target);
  console.log('event.target.name:', event.target.tagName);
  if (event.target.nodeName === 'BUTTON') {
    var closestAncestor = event.target.closest('.task-list-item');
    console.log('closest .task-list-item:', closestAncestor);
    closestAncestor.remove();
  }
}

$taskList.addEventListener('click', handleClick);
