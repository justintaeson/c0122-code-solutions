var $tabContainer = document.querySelector('.tab-container');
var $tabNodeList = document.querySelectorAll('.tab');
var $viewNodeList = document.querySelectorAll('.view');

function handleClick(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabNodeList.length; i++) {
      if ($tabNodeList[i] === event.target) {
        $tabNodeList[i].setAttribute('class', 'tab active');
      } else {
        $tabNodeList[i].setAttribute('class', 'tab');
      }
    }
    var getAttribute = event.target.getAttribute('data-view');

    for (let i = 0; i < $viewNodeList.length; i++) {
      if ($viewNodeList[i].getAttribute('data-view') === getAttribute) {
        $viewNodeList[i].setAttribute('class', 'view');
      } else {
        $viewNodeList[i].setAttribute('class', 'view hidden');
      }
    }
  }
}

$tabContainer.addEventListener('click', handleClick);
