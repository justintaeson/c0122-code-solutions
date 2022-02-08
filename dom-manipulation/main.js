var numberOfClicks = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function clickIncrement(event) {
  numberOfClicks++;
  $clickCount.textContent = 'Clicks: ' + numberOfClicks;
  if (numberOfClicks >= 4 && numberOfClicks < 7) {
    $hotButton.className = 'hot-button cool';
  }
  if (numberOfClicks >= 7 && numberOfClicks < 10) {
    $hotButton.className = 'hot-button tepid';
  }
  if (numberOfClicks >= 10 && numberOfClicks < 13) {
    $hotButton.className = 'hot-button warm';
  }
  if (numberOfClicks >= 13 && numberOfClicks < 16) {
    $hotButton.className = 'hot-button hot';
  }
  if (numberOfClicks >= 16) {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', clickIncrement);
