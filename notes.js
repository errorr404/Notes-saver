console.log('starting notes.js');
// console.log(module);
//here we export a const age by module
var addNote = (title,body) =>{
  console.log("Adding note",title,body);
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
