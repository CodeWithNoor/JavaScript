// map method --> most important something return

const numbers = [1,2,3,4]

function squaring(number)
{
    return number * number;
}

const newnum = numbers.map(squaring);
console.log(newnum);

// **************************************************

const string = ["Abbas", "Ubaid", "Zain", "Aleena"];

function array(name)
{
    return name;
}

const newArray = string.map(array);
console.log(newArray)

// **************************************************
const persons = [
    {first_name: "Abbas", id : "bc210000", passion : "Web_Developer"},
    {first_name: "Ubaid", id : "bc2100337", passion : "Web_Developer"}
]

function getinfo(person)
{
    console.log(person.first_name);
    console.log(person.id);
    console.log(person.passion);
}
persons.map(getinfo);

