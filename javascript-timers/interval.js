var $header = document.querySelector('.countdown-display');
var timer = setInterval(countdown, 1 * 1000);
var countDown = 4;

function countdown() {
  if (countDown > 1) {
    countDown--;
    $header.textContent = countDown.toString();
  } else {
    $header.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timer);
  }
}
