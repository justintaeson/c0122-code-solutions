var $formValue = document.querySelector('#contact-form');

function valueForm(event) {
  event.preventDefault();
  var valueFormObject = {};
  valueFormObject.name = $formValue.elements.name.value;
  valueFormObject.email = $formValue.elements.email.value;
  valueFormObject.message = $formValue.elements.message.value;
  console.log(valueFormObject);
  $formValue.reset();
}
$formValue.addEventListener('submit', valueForm);
