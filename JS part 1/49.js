// Lexical scope
const mynum = "value3";
const myval = "checked value";

function add(num_1, num_2)
{
    // const mynum = "value3";

    const lexical = function()
    {
        const checked = () => {
            // const myval = "checked value";
            console.log("my value checked", myval)
        } 
        checked();

        // const mynum = "value59";
        console.log("my value is ", mynum);
    }
    lexical();
    
    console.log(mynum);

    return num_1 + num_2;
}

console.log(add(9,8));