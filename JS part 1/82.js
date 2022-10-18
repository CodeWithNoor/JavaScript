// new keyword
// Empty object this = {}
// return this
// Object.create(createUser.prototype) --> yeh line this keyword khud krdy ga

function user(firstName, age){
    this.firstName = firstName;
    this.age = age;
}

user.prototype.about = function()
{
    console.log("Hello...!");
}

const user_1 = new user ("Abbas", 23);

user.prototype.about();
console.log(user_1);

// deep understanding of next tuts 