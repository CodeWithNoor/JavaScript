// Closures Example --> 4
// closures application function call only one time 

function myFunction()
{
    let counter = 0;

    return function(myfunc)
    {
        if(counter < 1)
        {
            console.log("Hi you called me...!");
            counter++;
        }
        else
        {
            console.log("You already call me")
        }
    }
}

const check = myFunction();
check();
check();
check();

