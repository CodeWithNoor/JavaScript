// AND & OR Operator

let first_name = "Abbas";
let age = 23;

// if(first_name[0] == "A")
// {
//     console.log("Your name start with A");
// }

// if(age >= 22)
// {
//     console.log("Your age is 23");
// }

// ********************* AND Operator ************************

if(first_name[0] == "A" && age >= 20 )
{
    console.log("Your name start with A and above 20");
}
else
{
    console.log("Your name start with A and below 24");
}

// ********************* OR Operator ************************

if(first_name[0] == "A" || age >= 24 )
{
    console.log("Your name start with A and above 20");
}
else
{
    console.log("Your name start with a letter and below 24");
}

