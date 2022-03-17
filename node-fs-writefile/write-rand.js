const fs = require('fs');
var randomNumber = Math.floor(Math.random() * 100);

const data = randomNumber.toString();

fs.writeFile('random.txt', data, 'utf8', err => {
  if (err) throw err;
});
