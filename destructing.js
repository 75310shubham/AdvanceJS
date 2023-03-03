// Destructing an array
const input= ['Modi','Sahab'];
// const firstName=input[0];
// console.log(firstName);
// const lastName=input[1];
// console.log(lastName);

const[first,last]=input;
console.log(`${first} ${last}`);
// console.log(first);

//Destructing an object

const job={title:'Developer',location:'Chhapra'}
// const {title}= job;
// console.log(title);

const {location}= job;
console.log(location);
const {title:jTitle}= job;
console.log(jTitle);