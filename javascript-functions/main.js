function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

function getArea(width, height) {
  var area = width * height;
  return area;
}

function getFirstName(person) {
  var getFirst = person.firstName;
  return getFirst;
}

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('convertMinutesToSeconds function result:', convertMinutesToSeconds(5));
console.log('greet function result:', greet('Beavis'));
console.log('getAreas function result:', getArea(17, 42));
console.log('getFirstName function result:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));
console.log('getLastElement function result:', getLastElement(['propane', 'and', 'propane', 'accessories']));
