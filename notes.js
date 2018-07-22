console.log('starting notes.js');
// console.log(module);
//here we export a const age by module
const fs = require('fs');

var fetchNotes= () =>{
  // we want to read the file but may be it doesn't exist then it gives an error to resolve this we put the code into try catch block
  try {
    // now read the data from existing file.
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch {
    return [];
  }
}

var saveNotes = (notes) =>{
fs.writeFileSync("notes-data.json",JSON.stringify(notes));
}



var addNote = (title,body) =>{
//  console.log("Adding note",title,body);
  var notes = fetchNotes();
  var note ={
    title,
    body
  };



  // check is there any duplicate file with same title
  var duplicateTitle = notes.filter((note)=> note.title===title);
  if(duplicateTitle.length === 0)
  {
    notes.push(note);
    saveNotes(notes);
  //  console.log(note);
    return note;
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
