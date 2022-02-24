function updateHeading() {
  var $heading = document.querySelector('h1');
  $heading.textContent = 'Hello There';
}

setTimeout(updateHeading, 2 * 1000);
