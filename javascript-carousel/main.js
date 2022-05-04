const imagesArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
let currentIndex = 0;

const $leftArrow = document.querySelector('#left-arrow');
const $rightArrow = document.querySelector('#right-arrow');
const $img = document.querySelector('#image');
const $circle = document.querySelectorAll('.circle');

$leftArrow.addEventListener('click', event => {
  if (currentIndex === 0) {
    currentIndex = 4;
    $img.setAttribute('src', imagesArray[currentIndex]);
  } else {
    currentIndex--;
    $img.setAttribute('src', imagesArray[currentIndex]);
  }
  updateCircle();
});

$rightArrow.addEventListener('click', event => {
  if (currentIndex === 4) {
    currentIndex = 0;
    $img.setAttribute('src', imagesArray[currentIndex]);
  } else {
    currentIndex++;
    $img.setAttribute('src', imagesArray[currentIndex]);
  }
  updateCircle();
});

function updateCircle() {
  for (let i = 0; i < $circle.length; i++) {
    $circle[i].className = 'fa-regular fa-circle circle';
    if (i === currentIndex) {
      $circle[i].className = 'fa-solid fa-circle circle';
    }
  }
}

setInterval(() => {
  if (currentIndex === 4) {
    currentIndex = 0;
    $img.setAttribute('src', imagesArray[currentIndex]);
    updateCircle();
  } else {
    currentIndex++;
    $img.setAttribute('src', imagesArray[currentIndex]);
    updateCircle();
  }
}, 3000);
