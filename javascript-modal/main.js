var $blueButton = document.querySelector('.blue-button');
var $modalBackground = document.querySelector('.modal-background');
var $surveyButton = document.querySelector('.survey-button');

$blueButton.addEventListener('click', function () {
  $modalBackground.className = 'modal-background-clone';
});

$surveyButton.addEventListener('click', function () {
  $modalBackground.className = 'modal-background';
});
