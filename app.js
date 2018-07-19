console.log('Starting App');
// here require is used for importing the built-in module from node.
const fs = require('fs'); // import the file system module.
const os = require('os'); // import the os module to grab username.
const notes = require('./notes.js') // import the file from same directory
const val = notes.addNum(5,7);
console.log(val);




// const user = os.userInfo();
// //console.log(user);
//
// // appendFileSync is used for make a file in the directory.
// // here it makes a greeting.txt file in the directory with some messege which is passed.
// fs.appendFileSync('greeting.txt',`Hello ${user.username} and you are ${notes.age} old !`);
