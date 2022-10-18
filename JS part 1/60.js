// Sort method
// ASCII Table
// char --> ASCII value

// JS  not a number sort as a string elements
// Sort --> Numbers change string and sort

// ["5", "9", "1200", "400", "3000"] = [1200, 3000, 400, 5, 9] --> Answer 
// [53, 57, 49, 52, 51] = [49, 51, 52, 53, 57] --> Answer

// "0" : 48		
// "1" : 49		
// "2" : 50	
// "3" : 51	
// "4" : 52		
// "5" : 53	
// "6" : 54		
// "7" : 55		
// "8" : 56	
// "9" : 57	

const numbers = [5, 9, 1200, 400, 3000];
numbers.sort();
console.log(numbers);

// const array = ["Noor", null, "Abbas", undefined];
const array = ["ZAIN", "ALEENA", "amna", undefined]; //--> capital letter based come first
array.sort();
console.log(array);

// 5, 9, 400, 1200, 3000 ---> Expected answer
// a - b  
// 1200 - 400 = 790 
// a - b ---> Positive (greater than 0) ---> b, a
// 400, 1200

//  a - b
// 400 - 1200 = -800
// a - b ---> Negative ---> a, b

// Aescendind a - b
// Descending b - a

let number = [5, 9, 1200, 400, 3000];

function expected(a, b)
{
    return a - b;
}
number.sort(expected);
console.log(number);

// Price : low_To_high & high_To_low 
const products = [
    {product : 1, product_name : "P1", price : 1200},
    {product : 2, product_name : "P2", price : 200},
    {product : 4, product_name : "P4", price : 2100},
    {product : 3, product_name : "P3", price : 100},
    {product : 5, product_name : "P5", price : 1600},
]

// function production(a, b)
// {
//     return a.price - b.price;
// }
// const low_to_high = products.sort(production)
// console.log(low_to_high);

function production(a, b)
{
    return b.price - a.price;
}
const high_To_low = products.sort(production)
console.log(high_To_low);
