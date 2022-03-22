/*
- load the express module and assign it to the const variable express
- load the data.json module and assign it to the const variable data
- load the file system module and assign it to the const variable fs
- call the express function and assign the return to the variable app
*/

const express = require('express');
const data = require('./data.json');
const fs = require('fs');
const app = express();
const notes = data.notes;

app.use(express.json());

/*
- when clients submit a get request at the '/api/notes' file path, run the following function
- create a blank array for us to store the notes
- loop through the properties (the ids) in data.notes
- push the propeties (should be an object) into the notesArray
- for our response, send the 200 status code with a JSON version of notesArray
*/

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const property in data.notes) {
    notesArray.push(data.notes[property]);
  }
  res.status(200).json(notesArray);
});

/*
- when clients submit a get request at the '/api/notes/:id' file path, run the following function
- grab the client request id, make it into an integer, and assign it to the const variable currentID
- if the currentID is less than or equal to 0 OR if the the typeof currentID is not a number...
- send the 400 status code with a json object that has an error message inside
*/

app.get('/api/notes/:id', (req, res) => {
  const currentID = parseInt(req.params.id);
  if (currentID <= 0 || typeof currentID !== 'number') {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (data.notes[req.params.id]) {
    res.status(200).json(data.notes[req.params.id]);
  } else {
    res.status(404).json({ error: 'cannot find note with id ' + req.params.id });
  }
});

/*
 - when clients submit a post requqest at the '/api/notes' file path, run the following function
 - if the request body is undefined, meaning the client didn't specify a content...
 - send the 400 status code with a json object that has an error message inside

*/

app.post('/api/notes', (req, res) => {
  const currentID = parseInt(data.nextId);
  if (req.body.content === undefined) {
    res.status(400).json({ error: 'Content is a required field' });
    return;
  }
  notes[currentID] = req.body;
  notes[currentID].id = currentID;
  data.nextId++;

  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    } else {
      res.status(201).json(notes[currentID]);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const currentID = parseInt(req.params.id);
  if (Number.isInteger(currentID) === false || currentID <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (notes[currentID] === undefined) {
    res.status(404).json({ error: 'cannot find note with id ' + currentID });
  } else {
    delete notes[currentID];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(204).json(notes[currentID]);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const currentID = parseInt(req.params.id);
  if (Number.isInteger(currentID) === false || currentID <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (notes[currentID] === undefined) {
    res.status(400).json({ error: 'cannot find note with id ' + currentID });
  } else {
    notes[currentID].content = req.body.content;
    notes[currentID].id = currentID;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(notes[currentID]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
