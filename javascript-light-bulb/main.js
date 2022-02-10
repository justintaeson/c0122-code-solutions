var $background = document.querySelector('.main-background');
var $dot = document.querySelector('.yellow-dot');

var clickCount = 0;
function handleClick(event) {
  clickCount++;
  if (clickCount % 2 !== 0) {
    $dot.className = 'black-dot';
    $background.className = 'secondary-background';
  } else {
    $dot.className = 'yellow-dot';
    $background.className = 'main-background';
  }

}

$dot.addEventListener('click', handleClick);
