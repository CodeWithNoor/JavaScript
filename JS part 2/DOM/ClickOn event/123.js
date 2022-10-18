// const first_One = document.querySelector("#one");
// function myfunc_One()
// {
//     console.log("Click me...");
// }

// first_One.addEventListener("click", myfunc_One);

// ************************ Select All ****************************
const all_buttons = document.querySelectorAll("button");


// ************************** for of loop *************************
// for(let buttons of all_buttons){
//     buttons.addEventListener("click", function()
//     {
//         console.log("You click me...");
//     })
// }

// ************************** for loop *************************
// for(let i = 0; i<=all_buttons.length; i++)
// {
//     all_buttons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }

// ************************** for each loop *************************
all_buttons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this);
    })    
});