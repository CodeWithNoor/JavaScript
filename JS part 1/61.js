// find method
const array = ["Abbas", "Zain", "Aleena", "Ubaid", "Esha"];

function islength(string)
{
    return string.length === 4 // Name not exact three length --> undefined
}

const ans = array.find(islength);
console.log(ans);

// ********************************************************
const numbers = ["11", "2", "366", "4", "5"]; // As a string work no take a number

function find_numbers(number)
{
    return number.length === 3;
}
const answer = numbers.find(find_numbers);
console.log(answer);

// ********************************************************
let friend = [
    {user_id : 1, name: "harshit", stdId: "BC212030", passion: "web_Developer", hobbies: ["Coding", "Travelling", "Eating", "Napping"]},
    {user_id : 2, name: "mohit", stdId: "BC278783", passion: "web_Developer", hobbies: ["Coding", "Travelling","Napping"]}
]; 

function friends(user)
{
    return user.user_id === 1;
}

const objects = friend.find(friends);
console.log(objects)