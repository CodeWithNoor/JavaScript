// Iterables
// Jispe hum for of loop lga saken
// Object are not iterable
// string, array are iterables

const array = ["Abbas", "Ubaid", "Zain", "Aleena"];

for(const strings of array)
{
    console.log(strings);
}

// ********************************************************
const string = "Abbas";

for(const char of string)
{
    console.log(char);
}
// ********************************************************
// const obj = 
//     {
    //         name: "Abbas", Id: "Bc210202706", passion: "Web Developer"
//     }
    
// for(const object of obj)
// {
//     console.log(object);
// }

// ********************************************************
// Array like Object
// jinke pass length property hoti hai Aur jo index se access krskty hain
// example:- string

const name = "Abbas Ali";
console.log(name.length);
console.log(name[3]);