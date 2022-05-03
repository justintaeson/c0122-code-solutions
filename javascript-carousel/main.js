const imagesArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
let currentIndex = 0;

const $leftArrow = document.querySelector('#left-arrow');
const $rightArrow = document.querySelector('#right-arrow');
const $img = document.querySelector('#image');
const $firstCircle = document.querySelector('#first-circle');
const $secondCircle = document.querySelector('#second-circle');
const $thirdCircle = document.querySelector('#third-circle');
const $fourthCircle = document.querySelector('#fourth-circle');
const $fifthCircle = document.querySelector('#fifth-circle');

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
  if (currentIndex === 0) {
    $firstCircle.className = 'fa-solid fa-circle circle';
    $secondCircle.className = 'fa-regular fa-circle circle';
    $thirdCircle.className = 'fa-regular fa-circle circle';
    $fourthCircle.className = 'fa-regular fa-circle circle';
    $fifthCircle.className = 'fa-regular fa-circle circle';
  } else if (currentIndex === 1) {
    $firstCircle.className = 'fa-regular fa-circle circle';
    $secondCircle.className = 'fa-solid fa-circle circle';
    $thirdCircle.className = 'fa-regular fa-circle circle';
    $fourthCircle.className = 'fa-regular fa-circle circle';
    $fifthCircle.className = 'fa-regular fa-circle circle';
  } else if (currentIndex === 2) {
    $firstCircle.className = 'fa-regular fa-circle circle';
    $secondCircle.className = 'fa-regular fa-circle circle';
    $thirdCircle.className = 'fa-solid fa-circle circle';
    $fourthCircle.className = 'fa-regular fa-circle circle';
    $fifthCircle.className = 'fa-regular fa-circle circle';
  } else if (currentIndex === 3) {
    $firstCircle.className = 'fa-regular fa-circle circle';
    $secondCircle.className = 'fa-regular fa-circle circle';
    $thirdCircle.className = 'fa-regular fa-circle circle';
    $fourthCircle.className = 'fa-solid fa-circle circle';
    $fifthCircle.className = 'fa-regular fa-circle circle';
  } else {
    $firstCircle.className = 'fa-regular fa-circle circle';
    $secondCircle.className = 'fa-regular fa-circle circle';
    $thirdCircle.className = 'fa-regular fa-circle circle';
    $fourthCircle.className = 'fa-regular fa-circle circle';
    $fifthCircle.className = 'fa-solid fa-circle circle';
  }
}
