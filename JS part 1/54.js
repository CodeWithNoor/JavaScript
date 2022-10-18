// callback functions

function myArray(name)
{
    console.log("Inside array function");
    console.log(["Abbas", "Ali", null]);
    console.log(name);
}

function array_1(callback)
{
    console.log("At callback function");
    callback("Abbas");
}
array_1(myArray)

// ***************************************************
function sum(num1, num2)
{
    return num1 + num2;
}

function sum_1(callbacks)
{
    console.log("Sum of two numbers");
    console.log(callbacks(9,3));
}
sum_1(sum);

// ***************************************************
function array(names)
{
    console.log(names);
}

function string(call_back)
{
    call_back(["Abbas","Ali"]);
}
string(array)
