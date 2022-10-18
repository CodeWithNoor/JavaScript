// let user = {
//     name : 'Abbas',
//     last_name : 'Ali',
//     age : 23,
//     goal : 'Full Stack Developer',

//     about()
//     {
//         console.log(this.name, this.last_name, this.age);
//     },

//     about_goal()
//     {
//         console.log(this.goal);
//     }
// }

// user.about();
// user.about_goal();

// ******************************************************
// 1000 of entries with different data store
// Function (That function create object)
// Add key value pair
// Object give return 

function createUser (name, last_name, age, passion)
{
    let person = {}
    person.name = name;
    person.laslast_name = last_name;
    person.age = age;
    person.passion =passion;
    person.about = function()
    {
        return this.name, this.last_name, this.age;
    }
    person.about_goal = function()
    {
        return this.goal;
    }

    return person;
}

const user = createUser("Abbas", "Ali", 23, "Web Developer");
console.log(user);

// Next tut complete understanding