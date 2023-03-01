// // //This will give error because data.json is not created.So the function will stop

// const fs = require('fs');

// function hello(){
//     const fileData= fs.readFileSync('data.json');
//     console.log('Hi there');
// }

// hello();

// // //There might be situation where we want to continue even error has been occurred, for that we will try and catch
// const fs = require('fs');

// function hello()
// {
//     try{
//       const fileData= fs.readFileSync('data.json');
//     }catch{
//         console.log('An Error occurred');
//     }
//     console.log('Hi there');
// }

// hello();

// //Scope of function inside a block
// const fs = require('fs');

// function hello()
// {
//     // let fileData;
//     try{

//     fileData= fs.readFileSync('data.json');
//       // const fileData= fs.readFileSync('data.json');
//       console.log(fileData);
//     }catch{
//         console.log('An Error occurred');
//     }
//     console.log(fileData);
//     // console.log('Hi there');
// }

hello();