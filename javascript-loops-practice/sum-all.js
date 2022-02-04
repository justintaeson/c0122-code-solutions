/* exported sumAll */

function sumAll(numbers) {
  var sumAllNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumAllNumbers += numbers[i];
  }
  return sumAllNumbers;
}
