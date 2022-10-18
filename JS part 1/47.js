// hoisting

hello() // --> Before and After calling function that's work same

function hello()
{
    console.log("hello");
}


// ***********************************************

//console.log(string); // --> ReferenceError: Cannot access 'string' before initialization
const string = "harshit";
console.log(string); 


// ***********************************************
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

let ans = find_target([1,2,3], 9);
console.log(ans); //ReferenceError: Cannot access 'ans' before initialization at 47.js:17:13

