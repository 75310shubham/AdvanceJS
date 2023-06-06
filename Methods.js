// 1. What is the difference between
//     a)      const first=()=>{}
//     b)      const first=()=>()

// //Regular Function
// let a=22;
// function first(){
//     return a;
// }
// console.log(first());


//Arrow Function

// a = 22;
// const first = () => a;
// console.log(first());

// a = 22;
// const first = () => "a";
// console.log(first());

// a = 22;
// const first = () => (a);
// console.log(first());

// a = 22;
// const first = () => {
//   return a;
// };
// console.log(first());

// a = 22;
// const first = () => {
//   return console.log(a);
// };
// first();

// // // 2. Explain these methods 
//     a)find
//     b)filter
//     c)every
//     d)some
//     e)for of
//     f)forEach
//     g)map
//     h)reduce 
    

// //Find
// //1

// const arr=[2,4,6,8,10];

// const myFunc=(value,index)=>{
//     if(value===6){
//          console.log("6 Exists")
//     }
// };

// arr.find(myFunc);

// //2

// const arr=[2,4,16,8,10];

// arr.find((value,index)=>{
//     if(value===6){
//          console.log("6 Exists")
//     }
//     else{
//         console.log("6 not exists")
//     }
// });

// //3

// const arr=[2,4,6,8,10];

// const result = arr.find((value,index)=>{
//     if(value > 6){
//       return value;
//     }
// });

// console.log(result);
// //Find run only once that's why we use filter


// // //Filter

// // //1

// const arr=[2,4,6,8,10];
// const result = arr.filter((value,index)=>{
//     if(value > 6){
//       return value;
//     }
// });
// console.log(result);
// // console.log(arr);
// // // Also filter is creating new array, everytime


// // //Every

// // //1

// const arr=[2,4,6,8,10];

// const result = arr.every((value,index)=>{
//     if(value > 6){
//       return value;
//     }
// });

// console.log(result);
// // Ye boolean value return karega, isme iska matlab ki saari value 6 se baari hai, agar nahi to false de diya


// // //Some

// // //1

// const arr=[2,4,6,8,10];

// const result = arr.some((value,index)=>{
//     if(value > 6){
//       return value;
//     }
// });

// console.log(result);
// // Ye boolean bhi value return karega, lekin ye check kar raha hai ki, ki isme ko 6 se bada hai, agar haan to true 


// //For of

// //1

// const arr=[2,4,6,8,10];

// for(const value of arr){
//     console.log(value);
// }
// // console.log(arr);

// // //2

// const arr=[2,4,6,8,10];

// for(const value of arr){
//     console.log(value+3);
// }

// // //3

// const arr=[2,4,6,8,10];

// for(const value of arr){
//     value= value+3;
//     console.log(value);
// }

// // //4

// const arr=[2,4,6,8,10];

// for(let value of arr){
//     value= value+3;
//     console.log(value+3);
// }

// // //5

// const arr=[2,4,6,8,10];
// for(let value of arr){
//     value= value+3;
//     console.log(value+3);
// }
// console.log(arr);
// // No change in original array

// // //6

// const arr=[2,4,6,8,10];

// for(let value of arr){
//     value+=3;
//     console.log(value+3);
// }

// console.log(arr);



// // //For each
// // //1
// const arr=[2,4,6,8,10];

// arr.forEach((value,index)=>{
//     // console.log(value);
//     console.log(index);
// })


// // //2
// const arr=[2,4,6,8,10];
// let totalSum=0;

// arr.forEach((value,index)=>{
//     totalSum+=value;
// })

// console.log(totalSum);


// // //3
// const arr=[2,4,6,8,10];

// arr.forEach((value,index)=>{
//     value+=20;
//     console.log(value);
// })

// console.log(arr);
// // No change in original array

// // //3
// const arr=[2,4,6,8,10];

// const result=arr.forEach((value,index)=>{
//  return value 
// })

// console.log(result);
// // For each, array ke element pe hi apply karta hai, aur original array ko change nahi karta

// // //4
// const arr=[2,4,6,8,10];

// const result=arr.forEach((value,index)=>{
//  return value + 20
// })

// console.log(result);

// //map

// // //1
// const arr=[2,4,6,8,10];

// const result=arr.map((value,index)=>{
//  return value + 20
// })

// console.log(result);
// // for each ki tarah ye bhi original array mein kuch change nahi karta, 

// // //2
// const arr=[2,4,6,8,10];

// const result=arr.map((value,index)=>{
//  return value + 20
// })

// console.log(result);
// console.log(arr);
// // for each ki tarah ye bhi original array mein kuch change nahi karta, 


// //reduce