// call, apply, bind method

function func()
{
    console.log("HELLO...!");
}

func.call();

// **************************************************

// let person = {
//     name1 : "Naira",
//     passion1 : "Web Developer",
//     hobbies1 : ["Coding", "Traveling"],
//     about : function(num1, num2)
//     {
//         return num1 * num2;
//     }
// }
// console.log(person.about(4,6))
// console.log(person)

// **************************************************
// let user = {
//     name : "Noor",
//     passion : "Web Developer",
//     About : function(hobbies)
//     {
//         console.log(this.name, this.passion, hobbies);
//     }
// }

// let user1 = {
//     name : "Fatima",
//     passion: "Web Developer"
// }

// user.About.call(user, ['Coding']);
// user.About.call(user1, ['Coding', 'Traveling']);

// ******************Other method********************************
// Both are same
// function About(hobbies)
// {
//     console.log(this.name, this.passion, hobbies);
// }

// let user = {
//     name : "harshit",
//     passion : "Web Developer",
// }

// let user1 = {
//     name : "mohit",
//     passion: "Web Developer"
// }

// About.call(user, ['Coding', 'Traveling', 'Eating', 'Napping', 'Songs listen']);
// About.call(user1, ['Coding', 'Traveling','Napping']);

// ****************** Apply method ********************************
// Apply work Same as call(). The Difference is that We can pass Arguments in Array

// let users = {
//     Name : 'KARTIK',
//     passion : ['Coding', 'Traveling', 'Eating', 'Napping', 'Songs listen'],
//     about : function(age)
//     {
//         console.log(this.Name,`and age is ${age} and passion is`, this.passion);
//     }
// };

// let user = {
//     Name : 'Naira',
//     passion : ['Coding', 'Traveling', 'Eating', 'Napping', 'Songs listen']
// }

// users.about.apply(users, [23]);
// users.about.apply(user, [20]);

// ****************** Bind method ********************************
// Bind() method doesn't Print on Console it returns a Function. We Can Assign a variable to it.
// Function return for bind method

function about(age)
{
        console.log(this.Name,`and age is ${age} and passion is`, this.passion);
}

let users = {
    Name : 'KARTIK',
    passion : ['Coding', 'Traveling', 'Eating', 'Napping', 'Songs listen'],
};

let user = {
    Name : 'Naira',
    passion : ['Coding', 'Traveling', 'Eating', 'Napping', 'Songs listen']
}

const myfunc = about.bind(users, 23);
const myfunc_1 = about.bind(user, 20);

myfunc();
myfunc_1();

// Don't do this mistake

// users.about();
// const func = users.about.bind(user);
// func()