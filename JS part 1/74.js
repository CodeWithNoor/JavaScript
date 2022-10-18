// Arrow functions
// Arrow functions this are not avaliable
// Arrow functions --> this take a surrounding
// Arrow functions --> this was not change


// let user = {
//     name : "Abbas",
//     age : 23,
//     passion : "Web Developer",
//     about : function(hobbies)
//     {
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.passion);
//         console.log(hobbies);
//     }
// }

// user.about(["Coding", "Traveling"]);

// ********************************************************
// In this case this is undefined of arrow function
// this & window both are same work arrow function

let user = {
    name : "Abbas",
    age : 23,
    passion : "Web Developer",
    about : (hobbies) =>
    {
        console.log(this.name);
        console.log(this.age);
        console.log(this.passion);
        console.log(hobbies);
    }
}

user.about(["Coding", "Traveling"]);
