// some method 

const numbers = [5,7]; // someone vaiables are even --> true

function isEven(number)
{
    return number % 2 === 0;
}

const even = numbers.some(isEven);
console.log(even);

// ********************************************************
let friend = [
    {user_id : 1, product: "mobile", price: 1},
    {user_id : 2, product: "laptop", price: 1}
]; 

const ans = friend.some((product_items) => {
    return product_items.price < 3
})

console.log(ans);