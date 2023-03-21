// //Using Synchrous

// const fs = require('fs');

// function readfile(){
//     let filedata;

//     filedata=fs.readFileSync('data.txt');

//     console.log('An Error occured');
//     console.log(filedata.toString());
//     // console.log(filedata);
//     console.log('Hi there');
// }

// readfile();

// //Using Asynchrous

// const fs = require('fs');

// function readfile(){
//     let filedata;

//     fs.readFile('data.txt',function(error,filedata){
//         console.log('File parsing done');
//         console.log(filedata.toString());
//     });

//     console.log('An Error occured');

//     console.log('Hi there');
// }

// readfile();

// //Using Asynchrous promises

// const fs = require('fs/promises');

// function readfile(){
//     let filedata;

//     fs.readFile('data.txt')
//     .then(function(filedata){
//         console.log('File Parsing Data');
//         console.log(filedata.toString());
//         //return antotherAsyncOperation;
//     })
//     .then(function(){

//     });

//     console.log('An Error occured');

//     console.log('Hi there');
// }

// readfile();

// //Using Asynchrous promises with error handling

// const fs = require('fs/promises');

// function readfile(){
//     let filedata;

//     fs.readFile('data.txt')
//     .then(function(filedata){
//         console.log('File Parsing Data');
//         console.log(filedata.toString());
//         //return antotherAsyncOperation;
//     })
//     .then(function(){

//     })
//     .catch(function(error){
//         console.log(error);
//     });
//     console.log('An Error occured');

//     console.log('Hi there');
// }

// readfile();

// //Using Asynchrous promises with await

// const fs = require('fs/promises');

// async function readfile(){
//     let filedata;

//   filedata= await fs.readFile('data.txt')

//     console.log('File Parsing Data');
//     console.log(filedata.toString());
//     console.log('Hi there');
// }

// readfile();

// //Using Asynchrous promises with await and error handling

// const fs = require("fs/promises");

// async function readfile() {
//   let filedata;
//   try {
//     filedata = await fs.readFile("data.txt");
//   } catch(error) {
//     console.log("error");
//   }
//   console.log("File Parsing Data");
//   console.log(filedata.toString());
//   console.log("Hi there");
// }

// readfile();
