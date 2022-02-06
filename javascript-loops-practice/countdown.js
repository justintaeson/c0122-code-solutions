/* exported countdown */

function countdown(number) {
  var numberArray = [];
  for (let i = number; i <= number && i >= 0; i--) {
    numberArray.push(i);
  }
  return numberArray;
}
