console.log('starting notes.js');
// console.log(module);
//here we export a const age by module
const fs = require('fs');
var addNote = (title,body) =>{
//  console.log("Adding note",title,body);
  var notes = [];
  var note ={
    title,
    body
  };


  // we want to read the file but may be it doesn't exist then it gives an error to resolve this we put the code into try catch block
  try {
    // now read the data from existing file.
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch {

  }
  // check is there any duplicate file with same title
  var duplicateTitle = notes.filter((note)=> note.title===title);
  if(duplicateTitle.length === 0)
  {
    notes.push(note);
    fs.writeFileSync("notes-data.json",JSON.stringify(notes));
  }

};

var getAll =() =>{
  console.log('getting all the content');
};

var getNote = (title) => {
  console.log('title to read',title);
};

var removeNote = (title) => {
  console.log('title to remove',title);
};
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
