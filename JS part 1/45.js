// Function Expression

// **************************************************

const greeting = function(greet, name) {
    console.log(greet , name, "You are genius");
}

let name = "harshit";
let greet = "Hello!";

greeting(greet, name);

// **************************************************
const person = function (name_1, Age, passion)
{
    console.log("My name is: ", name_1);
    console.log("My age is: ", Age);
    console.log("My passion is: ", passion);
}

let name_1 = "Noor";
let Age = 20;
let passion = "Web_Developer";

person(name_1, Age, passion)

// **************************************************
const isEven = function (num) 
{
    if(num %2 === 0)
    {
        return true;
    }
    return false;
}

const ans = isEven(4)
console.log(ans);