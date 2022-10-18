// primitive vs reference data type

// Primitive data type --> data store stock

let num = 9;
let num1 = num;

console.log("The value of num is: ", num);
console.log("The value of num1 is: ", num1);

num++;
console.log("After incrementation of num");
console.log("The value of num is: ", num);
console.log("The value of num1 is: ", num1);

// Reference data type --> data store heap with same address and go to store stock

let string = [1, 2, 3, 4];
let string_1 = string;

console.log("The value of string is ", string);
console.log("The value of string_1 is ", string_1);

string.push(5);
console.log("After push of string");
console.log("The value of string is ", string);
console.log("The value of string_1 is ", string_1);
