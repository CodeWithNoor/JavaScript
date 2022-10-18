// Method
// function inside object

let keys = {
    key : 'value_1',
    key_1 : 'value_2',
    About : function()
    {
        console.log("Function inside Object it is called Method");
    }
};

console.log(keys);
keys.About(); 

// ***********************************************

let add = {
    key : "value_1",
    key1 : function (name)
    {
        return name;
    } 
}

console.log(add);
console.log(add.key1('Abbas'));

// ***********************************************
// this --> is also a object

// let person = {
//     name : "Abbas",
//     passion : "Web Developer",
//     hobbies : ["Coding", "Traveling"],
//     about : function ()
//     {
//         // console.log(this);
//         console.log(this.name); 
//     }
// };

// console.log(person);
// person.about();

// ***********************************************

function data_store()
{
    console.log(`Name is ${this.name} & age is ${this.hobbies} & passion ${this.passion}`);
}

let person1 = {
        name : "Abbas",
        passion : "Web Developer",
        hobbies : ["Coding", "Traveling"],
        about : data_store
    };

let person2 = {
        name : "Harshit",
        passion : "Web Developer",
        hobbies : ["Coding", "Traveling"],
        about : data_store
    };
    
console.log(person1);
// person1.about();

console.log(person2);
// person2.about();











