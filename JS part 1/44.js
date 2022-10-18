// Functions 
//  Function declaration 

function greeting(greet, name) {
    console.log(greet , name, "You are genius");
}

let name = "Abbas";
let greet = "Hello!";

greeting(greet, name);

// **************************************************
function person(name_1, Age, passion)
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
// Dry --> Don't repeat yourself

function sum_two_numbers(num_1, num_2)
{
    // console.log(num_1 + num_2);
    return num_1 + num_2;
}

let sum = sum_two_numbers(6,8);
console.log(sum);

// **************************************************
// console.log(2+3+undefined) // ---> Not a Number
// console.log(undefined+undefined) // ---> Not a Number

function sum_three_numbers(num_3, num_4, num_5)
{
    return num_3 + num_4 + num_5;
}

let sum_1 = sum_three_numbers(4,2);
console.log(sum_1);

// **************************************************
// input : 1 number ---> odd , even
// output : true, even

function isEven(a)
{
    if(a%2==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
let a = 5;
console.log(isEven(a))

// **************************************************
// input --> string
// output --> first_character

function strings(string)
{
    return string[0];
}

const anystring = strings("Abbas");
console.log(anystring);

// **************************************************
// input : array, target --> number
// output : index of target if target present in array

function find_target(array, target)
{
    for(let i = 0; i <= array.length; i++)
    {
        if(array[i] === target)
        {
           return i;
        }
    }
    return -1;
}

let arrays = find_target(["Abbas", "Noor", null, undefined], "Noor");
console.log(arrays)


