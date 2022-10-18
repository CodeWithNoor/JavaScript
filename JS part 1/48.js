// Function inside Function
// Mixed function --> declaration --> expression --> arrow

function array(arrays)
{
    const name = function(string)
    {
        console.log(string[0]);
    }
    
    const add = (num1, num2) =>
    {
        return num1 + num2;
    }

    const multiply = (num_1, num_2) => num_1 * num_2;
    
    console.log(multiply(7,5));
    
    console.log(add(7,5));

    name(["Noor", "Fatima", null, undefined]);

    console.log(arrays[1]);
}

array([1,2,3,4]);



