console.log('Starting App');
// here require is used for importing the built-in module from node.
const fs = require('fs'); // import the file system module.
const _ = require('lodash');

const notes = require('./notes.js') // import the file from same directory


var command = process.argv[2]; // here to take command we write in command prompt node app.js command
console.log('command:',command);
if(command==='add')
{
  console.log('adding the notes');
}
else if(command==='list')
{
  console.log('listing all the notes');
} else if(command==='read')
{
  console.log('fetching all the notes');
} else if(command==='remove')
{
  console.log('removing the notes');
}
else console.log('command not recognized');
