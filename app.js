console.log('Starting App');
// here require is used for importing the built-in module from node.
const fs = require('fs'); // import the file system module.
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js') // import the file from same directory

const argv = yargs.argv;

//var command = process.argv[2]; // here to take command we write in command prompt node app.js command
var command = argv._[0];
console.log('command:',command);
//console.log('process',process.argv);
console.log('yargs',argv);
if(command==='add')
{
  console.log('adding the notes');
   var note = notes.addNote(argv.title,argv.body);
  console.log(note);
  if(typeof note !=="undefined" && note.title===argv.title)
  {
    console.log('notes successfully saved');
    notes.logNote(note);
  }
  else if(typeof note =="undefined")
  {
    console.log('duplicate note found');
  }

}
else if(command==='list')
{
  console.log('listing all the notes');
 notes.getAll();

}
else if(command==='read')
{
//  console.log('fetching all the notes');
  var note = notes.getNote(argv.title);
//  console.log(note);
  if(note)
  {
    console.log('note found');
    notes.logNote(note);
  }
  else
  {
    console.log('note not found');
  }

}
else if(command==='remove')
{
  console.log('removing the notes');
  var remove = notes.removeNote(argv.title)
  if(remove) console.log('node not found');
  else console.log('node removed');
}
else console.log('command not recognized');
