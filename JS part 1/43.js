// nested destructuring

let person = [
    { 
    name: "Aleena",
    id : "bc123455",
    passion : "Web_Developer",
    hobbies : ["Coding"]
    },
    { 
    name: "Noor",
    id : "bc0987665",
    passion : "Web_Developer",
    hobbies : ["Coding"]
    },

    // { 
    // name: "Zain",
    // id : "bc0987665",
    // passion : "Web_Developer",
    // hobbies : ["Coding"]
    // },
    // { 
    // name: "Abbas",
    // id : "bc0987665",
    // passion : "Web_Developer",
    // hobbies : ["Coding"]
    // },

];

//let [person1, person2, ...newperson] = person; // ---> array destructure
// let [{name}, {passion}, ...newperson] = person; // ---> array inside object destructure
let [{name : person_1, id, passion}, {hobbies}, ...newperson] = person;
console.log(person_1);
console.log(id);
console.log(passion);
console.log(newperson);
