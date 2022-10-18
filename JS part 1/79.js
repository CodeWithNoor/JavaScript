//  JS ko jo cheez nhi mile gi wo proto ma ja ke dekhe ga


// let obj = {
//     key : 'value',
//     key1 : 'value1'
// };

// --proto--
// official ecmascript documentation
// --proto-- === [[prototype]] --> both are same
// prototype --> different for this [[prototype]] 


// There is one more way to create one empty object
// Blank string and Object.create both are same work --> any key are not avaliable to object let surrounding the check of key

// let obj3 = {};
// obj3.key4 = 'value4'

// let obj3 = Object.create(obj); // return a blank braces  
// obj3.key4 = 'value4';
// obj3.key1 = 'value_1';

// console.log(obj3);
// console.log(obj3.key);
// console.log(obj3.key1);
// console.log(obj3.__proto__);

// what is happening

// obj3.__proto__  // --> object.create set the property of proto

// **************************************************************

let userMethod = {
    about : function()
    {
        return `${this.name} & age is ${this.age}`;
    },
    about_goal : function()
    {
        return "Good Performance";
    }
}


function createUser (name, age, passion)
{
    let person = Object.create(userMethod) //--> {}, set of proto property
    person.name = name;
    person.age = age;
    person.passion =passion;
    return person;
}

const user = createUser("Abbas",23, "Web Developer");
const user1 = createUser("Null", 20, "Web Developer");

console.log(user);
console.log(user1);

// console.log(user.about());
// console.log(user1.about());
