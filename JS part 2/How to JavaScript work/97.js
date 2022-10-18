// function execution Context

let foo = "foo";
console.log(foo);

function get_fullName(first_Name, last_Name)
{
    console.log(arguments); // Array like Object
    let myvar = "var inside function";
    console.log(myvar);

    const fullName = first_Name + " " + last_Name;
    return fullName;
}

const person_Name = get_fullName("Harshit", "Sharma");
console.log(person_Name)