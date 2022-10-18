// lexical, environment, scope chain 

const last_Name = "Ali";

const print_Name = function()
{
    const first_Name = "Abbas";
    function myfunction()
    {
        console.log(first_Name);
        console.log(last_Name);
    }
    myfunction();
}

print_Name();
