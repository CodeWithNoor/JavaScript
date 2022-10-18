// param destructuring

// object
// react

const person = {
    name : "Abbas",
    id : "bc210202706",
    passion: "Web_Developer",
    hobbies: ["Coding", "Traveling"]
};

// function person_detail(obj)
// {
//     console.log(obj.name);
//     console.log(obj.id);
//     console.log(obj.passion);
//     console.log(obj.hobbies);
//     console.log(obj.age); ---> undefined not define the object
// }

// *****************************************************
person.age = 23;

function person_detail({name, id, passion, hobbies, age})
{
    console.log(name);
    console.log(id);
    console.log(passion);
    console.log(hobbies);
    console.log(age);
}
person_detail(person);
