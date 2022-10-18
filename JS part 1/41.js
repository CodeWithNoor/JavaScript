// Object destructuring
// Take a key so by default value of key print 

let obj= {
    val_1 : "val_1", 
    val_2 : "val_2",
    val_3 : "val_3",
    val_4 : "val_4",
    val_5 : "val_5"
};

console.log(obj.val_1);
console.log(obj.val_2);
console.log(obj.val_3);
console.log(obj.val_4);
console.log(obj.val_5);

// *************************************
const {val_1, val_2, val_3, ...restprops} = obj;
console.log(obj.val_1);
console.log(obj.val_2);
console.log(obj.val_3);
console.log(restprops);