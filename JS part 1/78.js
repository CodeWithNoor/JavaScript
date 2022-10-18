let userMethod = {
    about : function()
    {
        return `${this.name} & age is ${this.age}`;
    },
    about_goal : function()
    {
        return "Full Stack Developer";
    }
}


function createUser (name, age, passion)
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
const user1 = createUser("Null", 20, "Web Developer");

const users = user.about()
console.log(users);

const userss = user1.about()
console.log(userss)

const users_goal = user1.about_goal()
console.log(users_goal)

// More improvement for next tut