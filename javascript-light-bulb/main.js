var $background = document.querySelector('.main-background');
var $dot = document.querySelector('.yellow-dot');

var isBulbOn = false;
function handleClick(event) {
  if (isBulbOn === false) {
    $dot.className = 'black-dot';
    $background.className = 'secondary-background';
    isBulbOn = !isBulbOn;
  } else if (isBulbOn === true) {
    $dot.className = 'yellow-dot';
    $background.className = 'main-background';
    isBulbOn = !isBulbOn;
  }
}

$dot.addEventListener('click', handleClick);
