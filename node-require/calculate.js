const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

var num1 = process.argv[2];
var method = process.argv[3];
var num2 = process.argv[4];

if (method === 'plus') {
  method = add;
} else if (method === 'minus') {
  method = subtract;
} else if (method === 'times') {
  method = multiply;
} else if (method === 'over') {
  method = divide;
} else {
  console.log('not an operator');
}

console.log(method(parseInt(num1), parseInt(num2)));
