// *********** set interval *************

// console.log("script start !!!");

// suppose too late to code executtion

// let total = 0;
// for(let i = 0; i<=10; i++){
//     total += i;
// }

// console.log(total);

// setInterval(()=>{
//     console.log(Math.random());
// }, 2000);

// console.log("script end !!!");

// *****************************************************************
// set Interval randomly color changed....

const body = document.querySelector("body");
const button = document.querySelector("button");

const intervalId = setInterval(()=>{
    const red = Math.floor(Math.random() * 126);
    const green = Math.floor(Math.random() * 126);
    const blue = Math.floor(Math.random() * 126);
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = rgb; 
    // console.log(rgb);
}, 3000);

button.addEventListener("click", ()=>{
    clearInterval(intervalId);
    button.textContent = body.style.backgroundColor;
})
console.log(intervalId);