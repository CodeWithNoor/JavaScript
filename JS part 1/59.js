// Reduce method ---> As a input callback function
// Reduce method not given array it is only used for take a value

let string = ["Abbas", "Ubaid", "Aleena", "Zain", null];

function name(names, current_Name)
{
    return names + " " +current_Name;
}
const strings = string.reduce(name);
console.log(strings);

// ********************************************************
// Aim sum of all numbers

// accumulator      current_value       return
//      1                   2              3  ---> sum
//      3                   4              7  

let numbers = [1,2,3,4,5,6,7,8];

function sums(accumulator, current_value)
{
    return accumulator + current_value;
}

const ans = numbers.reduce(sums, 10); // ---> 10 is a initial value by default value is zero 
console.log(ans);

// ********************************************************

let persons = [
    {name: "Abbas", passion: "Web_Developer", hobbies: ["Coding", "Traveling", "Eating"]},  
    {name: "Ali", passion: "Web_Developer", hobbies: ["Coding", "Traveling"]}  
]

function object(person, getInfo)
{
    console.log(person, getInfo);
}
persons.reduce(object);
