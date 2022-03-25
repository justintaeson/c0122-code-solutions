function map(array, transform) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(transform(array[i]));
  }
  return newArray;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function timesTwo(array) {
  var solution = array * 2;
}

map(numbers, timesTwo);
// this gives us a new array with each element in the numbers array multiplied by 2
