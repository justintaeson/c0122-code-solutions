/*
- load express module and assign it to the const variable express
- call the express function and assign the return to const variable app
- create a variable and assign it the value of 1 so we can track our grades
- create a const variable with the value of an empty object to store our grades
*/

const express = require('express');
const app = express();
let nextId = 1;
const grades = {};

/*
- call the get method of the application with the filepath of grades and an anonymous function with the request and response parameters as its arguments
- assign the variable gradesArray an empty array so we can return an array
- loop through the grades object and push the current grades object into gradesArray
- after the loop, convert gradesArray with all our grades object into JSON format
*/

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

/*
- call the use method of the application with the express.json method as its argument to register a middleware
*/

app.use(express.json());

/*
- call the post method of the app with the filepath of grades and an anonymous function with the request and response parameters as its arguments
- set the gradesObject at the nextId's index to the body of the request aka the content
- set the value of property id in gradesObject at the nextId's index to the value of nextId
- send the grades at the nextId's index as the response with the status code 201
- increment the nextId by 1
*/

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  res.status(201).send(grades[nextId]);
  nextId++;
});

/*
- call the listen method on the app with 3000 and an anonymous function as it's arguments
- call the log method of the console object with a string as its argument
*/

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening!');
});
