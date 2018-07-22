/*
// here we make an object
// var obj = {
//   name: 'Dixit'
// };
//
// var stringObj = JSON.stringify(obj); // here stringify is used for change the object to the string format.
// console.log(typeof stringObj);
// console.log(stringObj);

// we store the data into string format and when we have to use the data then we convert it into the object and use it.

var personString = '{"name":"Dixit", "age":25}';
var person = JSON.parse(personString); // here string is parsed into the object format
console.log(typeof person);
console.log(person);
*/
const fs = require('fs'); // import the fileSystem module

// here we make an object
var originalNote = {
  title: 'some title',
  body: 'some body of the webapp'
};

// originalNoteString
var originalNoteString = JSON.stringify(originalNote); // convert object to string
fs.writeFileSync('notes.json',originalNoteString); // here we write a new file name notes.json in our file system

var noteString = fs.readFileSync('notes.json'); // here we read the file
//note
var note =JSON.parse(noteString); // here we convert the string format into the object
console.log(typeof note);
console.log(note.title);
