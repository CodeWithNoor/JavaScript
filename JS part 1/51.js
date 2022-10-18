// default parameter

// function string(a,b)
// {
//     return a + b;
// } 
// const ans = (string(2,4));
// console.log(ans);

// ***************************************************
function string(a,b)
{
    return a + b;
} 
const ans = (string(2)); // 2 + undefined = NaN
console.log(ans);

// ***************************************************
function string1(a1,b1)
{
    if(b1 === undefined)
    {
        b1 = 1;
    }
    return a1 + b1;
} 
const ans1 = (string1(2)); // 2 + undefined = NaN
console.log(ans1);

// ***************************************************
function string2(a2,b2 = 0)
{
    return a2 + b2;
} 
const ans2 = (string2(2,8)); // 2 + undefined = NaN
console.log(ans2);