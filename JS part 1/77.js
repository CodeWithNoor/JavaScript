let userMethod = {
    about : function()
    {
        return `${this.name} & age is ${this.age}`;
    },
    about_goal : function()
    {
        return this.goal;
    }
}


function createUser (name, age, passion, goal)
{
    let person = {}
    person.name = name;
    person.age = age;
    person.passion =passion;
    person.about = userMethod.about;
    person.about_goal = userMethod.about_goal;
    return person;
}

const user = createUser("Abbas",23, "Web Developer");
const user1 = createUser("Noor", 20, "Web Developer");

const users = user.about()
console.log(users);

const userss = user1.about()
console.log(userss);

// Next tut complete understanding