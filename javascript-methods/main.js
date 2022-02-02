// math object
var high = 99;
var middle = 52;
var low = 23;

var maximumValue = Math.max(high, middle, low);
console.log(maximumValue);

var heroes = ['batman', 'flash', 'ironman', 'spiderman'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log(randomIndex);

var randomHero = heroes[randomIndex];
console.log(randomHero);

// array methods
var library = [
  {
    title: 'The Zen Of Therapy',
    author: 'Epstein, Mark'
  },
  {
    title: 'Last Resort',
    author: 'Lipstein, Andrew'
  },
  {
    title: 'Small World',
    author: 'Evison, Jonathan'
  }
];

var lastBook = library.pop();
console.log(lastBook);

var firstBook = library.shift();
console.log(firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);

// string methods
var fullName = 'Justin Son';
var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log(sayMyName);
