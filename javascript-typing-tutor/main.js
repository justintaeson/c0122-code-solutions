const $spanList = document.querySelectorAll('span');
let index = 0;

document.addEventListener('keydown', event => {
  if ($spanList[index].textContent === event.key || ($spanList[index].innerHTML === '&nbsp;' && event.keyCode === 32)) {
    $spanList[index].className = 'green';
    index++;
    $spanList[index].className = 'underline';
  } else {
    $spanList[index].className = 'red underline';
  }
});
