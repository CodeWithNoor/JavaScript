// array destructuring

// let array = ["val_1", "val_2"]
// let value = array[0];
// let value_1 = array[1];

// console.log("My value 1 is: ", value);
// console.log("My value 2 is: ", value_1);

// *************** array destructure ******************

// let array = ["val_1", "val_2"]
// let [value, value_1] = array;

// console.log("My value 1 is: ", value);
// console.log("My value 2 is: ", value_1);


// *************** other method ******************

let array = ["val_1", "val_2", "val_3", "val_4", "val_5", "val_6"]
let [value, ,value_1, value_2] = array;

// Both are same method
// let [value, ,value_1, value_2, ...myarray] = array;
let myarray = array.slice(4)

console.log("My value 1 is: ", value);
console.log("My value 2 is: ", value_1);
console.log("My value 2 is: ", value_2);

console.log(myarray);
