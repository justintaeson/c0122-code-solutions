var currentCount = 3;
var timer = setInterval(countdown, 1000);

function countdown() {
  if (currentCount !== 0) {
    console.log(currentCount);
    currentCount--;
  } else {
    console.log('Blast off!');
    clearInterval(timer);
  }
}
