
const fs = require('fs');
const data = require('./data.json');
const argument = process.argv[2];

if (argument === 'read') {
  readNote();
  data.nextId = 5;
} else if (argument === 'create') {
  createNote();
} else if (argument === 'delete') {
  deleteNote();
} else if (argument === 'update') {
  updateNote();
}

function readNote() {
  for (let i = 1; i < data.nextId; i++) {
    if (data.notes[i]) {
      console.log(i + ': ' + data.notes[i]);
    }
  }
}

function createNote() {
  var noteArray = [];
  for (let i = 3; i <= process.argv.length - 1; i++) {
    if (process.argv[i]) {
      noteArray.push(process.argv[i]);
    }
  }
  var note = noteArray.join(' ');
  data.notes[data.nextId] = note;
  data.nextId++;
  const jsonNote = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', jsonNote, 'utf-8', err => {
    if (err) throw err;
  });
}

function deleteNote() {
  var argument2 = process.argv[3];
  delete data.notes[argument2];
  const jsonNote = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', jsonNote, 'utf-8', err => {
    if (err) throw err;
  });
}

function updateNote() {
  var index = process.argv[3];
  var noteArray = [];
  for (let i = 4; i <= process.argv.length - 1; i++) {
    if (process.argv[i]) {
      noteArray.push(process.argv[i]);
    }
  }
  var note = noteArray.join(' ');
  data.notes[index] = note;
  const jsonNote = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', jsonNote, 'utf-8', err => {
    if (err) throw err;
  });
}
