// Arrow Function

let number = (numbers) =>
{
    for(let i = 0; i < numbers; i++)
    {
        console.log(i);
    }
}
number(7);

// *********************************************
// Find Odd and Even number

const isEven = (num) =>
{
    if(num %2 === 0)
    {
        return true;
    }
    return false;
}

const ans = isEven(4)
console.log(ans);