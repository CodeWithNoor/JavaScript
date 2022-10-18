// Computed properties

let obj_1 = "val_1";
let obj_2 = "val_2";

let val_1 = "obj_1";
let val_2 = "obj_2";

// ************ output ******************
// {val_1: 'obj_1', val_2: 'obj_2'}

let object = {
    [obj_1] : val_1,
    [obj_2] : val_2
}

console.log(object)

// ********************************************

const object_1 = {};

object_1[obj_1] = val_1;
object_1[obj_2] = val_2;

console.log(object_1)