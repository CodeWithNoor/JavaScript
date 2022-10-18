// closures
// closures : 30-40%
// analyze : 70-80%
// real example : 100%

// function can return function

// function outer_Function()
// {
//     function inner_Function()
//     {
//         console.log("function return function");
//     }
//     return inner_Function;
// }

// const ans = outer_Function();
// console.log(ans);
// ans();

// ********************************************************
// print_Name return with local memory of print_fullName function 
// function to function return with local memory variables.

// closures --> print_Name return with lexical environment

// Closures Example --> 1

function print_fullName(first_Name, last_Name)
{
    function print_Name()
    {
        console.log(`${first_Name} ${last_Name}`)
    }
    return print_Name;
}

const ans = print_fullName("Harshit", "Sharma");
console.log(ans);
ans();
