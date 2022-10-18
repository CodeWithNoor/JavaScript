function createUser (name, age, passion)
{
    this.name = name;
    this.age = age;
    this.passion = passion;
}
  

createUser.prototype.about = function()
{
    console.log( `${this.name} & age is ${this.age} and achieveing goals`);
}

createUser.prototype.about_goal = function()
{
    console.log("Full Stack Developer");
}


const user = new createUser("Abbas",23, "Web Developer");
const user1 = new createUser("Null", 20, "Web Developer");

console.log(user);
console.log(user1);

// for(let key in user)
// {
//     console.log(key)
// }

// Not print of prototype property
// hasOwnProperty --> only function keys access 

for(let key in user)
{
    if(user.hasOwnProperty(key))
    {
        console.log(key);
    }
}