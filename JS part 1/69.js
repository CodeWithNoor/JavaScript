// clone using Object.assign
// Memory

const obj = {
    key : "Value_1",
    key_1 : "Value_2"
}

// Both are same for cloning
// const obj_1 = {...obj};
const obj_1 = Object.assign({}, obj)

obj.key_3 = "Value_3";
obj_1.key_4 = "Value_4";

console.log(obj);
console.log(obj_1);