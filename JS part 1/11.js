// undefined
// null

let first_Name; // --> Const must assign the value
console.log(first_Name);
console.log(typeof first_Name, first_Name);

let Name = null; // --> typeof null not object it is bug + error
console.log(Name);
console.log(typeof Name, Name);

// BitInt ---> Both are same BigInt add only add BigInt variables
let numbers = BigInt(123);
let numbers_1 = 123n;

console.log(numbers);
console.log(numbers_1);

console.log(numbers + numbers_1);
// console.log(numbers.MAX-SAFE-INTEGER);