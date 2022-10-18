// function returning function

function song()
{
    function Neha_song()
    {
        return "Mile Ho Tum....."
    }
    return Neha_song;
}
const ans = song();
console.log(ans())


// ********************* Simple Method ************************************
// Add two numbers and function return function

function add(num1, num2)
{
    return function sum()
    {
        return  num1 + num2
    }
}
const answer = add(1,2)
console.log(answer())

// ********************* Simple Method ************************************
function array(name)
{
    return function string()
    {
        console.log(name);
    }
}
const answers = array(["harshit","vashisth"]);
answers();
