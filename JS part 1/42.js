// Object inside array ---> real world application
// Array store multiple objects

let person = [
    { 
    name: "Aleena",
    id : "bc123455",
    passion : "Web_Developer",
    hobbies : ["Coding", "Traveling"]
    },
    { 
    name: "Noor",
    id : "bc0987665",
    passion : "Web_Developer",
    hobbies : ["Coding"]
    }
];

for (const key of person) {
    console.log(key.name);    
    console.log(key.passion);    
    console.log(key.hobbies);    
    // console.log(key);    
}




