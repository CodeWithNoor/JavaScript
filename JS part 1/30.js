// for loop in array

let names = ["Abbas", "Noor", "Zain", "Aleena", "Ubaid"];

for(let i = 0; i <= names.length; i++)
{
    console.log(names[i]);
    console.log(Array.isArray(names));
}

// remove last index

let name = [];
for(let i = 0; i <= names.length-2; i++)
{
    name.push(names[i].toUpperCase());
    console.log(Array.isArray(names));
}

console.log(name);