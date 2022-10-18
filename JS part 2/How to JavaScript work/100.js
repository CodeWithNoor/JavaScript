// Closures Example --> 2
// This function return with surrounding variables

function hello(x)
{
    console.log(arguments);

    const a = "Var_A";
    const b = "Var_B";

    return function()
    {
        console.log(a, b, x);
    }
}

const ans = hello("Var_X");
ans();