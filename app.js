console.log('Starting App');
// here require is used for importing the built-in module from node.
const fs = require('fs'); // import the file system module.
const os = require('os'); // import the os module to grab username.
const notes = require('./notes.js') // import the file from same directory
const _ = require('lodash');

console.log(_.isString(true)); // isString method return the true or false value.
console.log(_.isString('true'));

var filteredArray = _.uniq(['Dixit',1,2,'Dixit',2,3,5,1,5]);
console.log(filteredArray);



// const val = notes.addNum(5,7);
// console.log(val);




// const user = os.userInfo();
// //console.log(user);
//
// // appendFileSync is used for make a file in the directory.
// // here it makes a greeting.txt file in the directory with some messege which is passed.
// fs.appendFileSync('greeting.txt',`Hello ${user.username} and you are ${notes.age} old !`);
