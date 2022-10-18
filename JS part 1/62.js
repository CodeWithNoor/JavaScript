// Every metod --> true / false (boolean)
// callback function --> true / false (boolean)

let friend = [
    {user_id : 1, product: "mobile", price: 12000},
    {user_id : 2, product: "laptop", price: 72000}
]; 

const ans = friend.every((product_items) => {
    return product_items.price < 80000
})

console.log(ans);

// ********************************************************
// Check elements to all numbers are even or not

const numbers = [2,4,5,8,10]; // 5 are not even 

function isEven(number)
{
    return number % 2 === 0;
}

const even = numbers.every(isEven);
console.log(even);