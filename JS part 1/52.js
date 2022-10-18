// rest parameters

function array(a, b, ...c)
{
    console.log("The value of a is", a);
    console.log("The value of b is", b);
    console.log("The value of c is", c);
}

array(1,2,3,4,5,6)

// *********************************************
// sum of array
function add_all(...numbers)
{
    let total = 0;
    for(const number of numbers)
    {
        total = total + number;
    }
    return total;
}
const ans = add_all(1,2,3,4,5,6);
console.log(ans);