// Closures Example --> 3

// function myfunction(num)
// {
    //     return function()
    //     {
//         console.log(num**3);
//     }
// }

// const cube = myfunction(5); 
// cube();

// ************************ Other Method **********************

// function myfunction(power)
// {
//     return function (number)
//     {
//         return number ** power;
//     }
// }

// const Cube = myfunction(3); 
// const ans = Cube(2);
// console.log(ans);

// *********************************************************
const myfunction = power => number => number ** power;

const Cube = myfunction(3); 
const ans = Cube(2);
console.log(ans);

// *********************************************************
const sum = (num1, num2) => 
{
    return function() 
    { 
        return num1 + num2;
    }
}

const answer = sum(3, 5);
const add = answer();
console.log(add);
