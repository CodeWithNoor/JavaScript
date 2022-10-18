// spread operator in array

let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,0];

// let newarray = [...array1, ...array2, "Enough"];
let newarray = [..."abcd"];
console.log(newarray);


// spread operator in object
// obj element declaration not same element use from object

let obj_1 = {
    key1 : "val_1",
    key2 : "val_2"
};

let obj_2 = {
    key3 : "val_3",
    key4 : "val_4"
};

// let newobj = {...obj_1, ...obj_2, key : "value_7"};
let newobj = {...["Abbas", "Noor"]};
console.log(newobj);