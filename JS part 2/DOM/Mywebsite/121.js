// Intro to events
// click, mouseover, button press
// Reference --> MDN Event Reference 

// ************ Not good ****************

// const btn = document.querySelector(".btn-headline");
// console.log(btn)

// btn.onclick = function()
// {
//     console.log("You cliked me!")
// }

// ******************** Useful method ********************
// addEventListner Method --> It is very useful method

// const btn = document.querySelector(".btn-headline");

// function clickMe()
// {
//     console.log("You click me...");
// }
// btn.addEventListener("click", clickMe())

// ********************* Anonymous function Both are same ************************
 
// const btn = document.querySelector(".btn-headline");

//  btn.addEventListener("click", function () {
//         console.log("You click me...");
// })


// *********************** Arrow function **********************
 
const btn = document.querySelector(".btn-headline");

 btn.addEventListener("click", () => {
        console.log("You click me...");
})