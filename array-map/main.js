const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

var doubled = numbers.map(numbers => numbers * 2);
console.log(doubled);

var prices = numbers.map(numbers => '$' + numbers + '.00');
console.log(prices);

var upperCased = languages.map(languages => languages.toUpperCase());
console.log(upperCased);

var firstLetters = languages.map(languages => languages[0]);
console.log(firstLetters);
