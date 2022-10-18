// Synchronous programming vs Asynchronous programming 
// JavaScript is a synchronous programming and single threaded

// synchronous programmimg block code ---> code execute line by line
// console.log("script start !!!");

// for(let i = 0; i<10; i++)
// {
//     console.log("inside for loop");
// }

// console.log("script end !!!");

// Asynchronous programming

// setTimeout() ---> take a callback function and argument to dealy print code

// console.log("script start !!!");
// function hello(){
//     console.log("Function inside");
// }

// setTimeout(hello, 1000)
// console.log("script end !!!");

// ************ Arrow function *****************
console.log("script start !!!");
const id = setTimeout(()=>{
    console.log("Inside setTimeout");
}, 1000); //1000 = 1 second

for(let i = 0; i<20; i++){
    console.log("Hmmmmmmmmmmmmmmmmm");
}

console.log("Something id is: ", id);
console.log("Clear time out");
clearTimeout(id);
console.log("script end !!!");