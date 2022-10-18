// let and const case both are same error:
// Uncaught ReferenceError:
// Cannot access 'first_Name' before initialization

// console.log(first_Name); --> useless

let first_Name = "Noor";
console.log(first_Name);


// ReferenceError: last_Name is not defined
// console.log(last_Name); 

// ******************************************************
// let array;
// console.log(array); // --> undefined 

// const array;
// console.log(array); // --> SyntaxError: Missing initializer in const declaration

// ******************************************************
// console.log(typeof array); // --> Reference Error

// let array = [1,2,3];
// console.log(array)

// ******************************************************
console.log(typeof Name); // --> undefined
