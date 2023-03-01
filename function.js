// // // Function Without Parameters
// function greetUser(){
//     console.log('Hi there');
//     console.log('Hello Ji');
// }

// greetUser();

// Function With Parameters
// function greetUser(userName){
//     console.log('Hi '+ userName + '!');
// }

// greetUser('Hook');
// greetUser();

// // // Function With Default Parameters
// function greetUser(userName= 'Niraj'){
//     console.log('Hi '+ userName + '!');
// }

// greetUser('Hook');
// greetUser();

// // Function With Parameters and Default Parameters 
// //Default parameter should always comes at last
// function greetUser(greetingPrefix, userName= 'user'){
//     console.log(greetingPrefix + ' '+ userName + '!');
// }

// greetUser('Hi','Hook');
// greetUser('Hello');


//Function output NaN :- Not a Number
// function sumUp(num1,num2,num3){
//     return num1+ num2 + num3
// }
// console.log(sumUp(1,2));

//Function String VS Number 
// function sumUp(num1,num2,num3='0'){
//     return num1+ num2 + num3
// }
// function sumUp(num1,num2,num3=0){
//     return num1+ num2 + num3
// }
// console.log(sumUp(1,2));

// // function having array as parameters
// function sumUp(numbers){
//     let result = 0;
//     for(const number of numbers){
//         result+= number; // result= result+ number
//     }
//     return result;
// }
// console.log(sumUp([1,5,10,11,3]));
// console.log(sumUp([5,10]));

// // function using Rest Parameters
// // Rest Parameter can have multiple parameters, merged into array automatically 
// // by Javascript so that we does not need to pass parameters as array
// function sumUp(...numbers){
//     let result = 0;
//     for(const number of numbers){
//         result+= number;
//     }
//     return result;
// }
// console.log(sumUp(1,5,10,11,3));

// // function using Rest and Spread Parameters
// // but parameter are explicitly array
// function sumUp(...numbers){
//     let result = 0;
//     for(const number of numbers){
//         result+= number;
//     }
//     return result;
// }
// const inputNumber= [1,5,10,11,20,31];
// console.log(sumUp(inputNumber));
// console.log(sumUp(...inputNumber));

// // functions are objects in javascript, it means we can add property in it, if we want
// function sumUp(...numbers){
//     let result = 0;
//     for(const number of numbers){
//         result+= number;
//     }
//     return result;
// }
// const inputNumber= [1,5,10,11,20,31];
// console.log(sumUp(...inputNumber));
// console.log(sumUp);

//Templete Literals in Function
// function greetUser(greetingPrefix, userName= 'user'){
//     console.log(greetingPrefix + ' '+ userName + '!');
// }

// function greetUser(greetingPrefix, userName= 'user'){
//     console.log(`${greetingPrefix} ${userName} !`);
// }

// greetUser('Hi','Hook');
// greetUser('Hello');