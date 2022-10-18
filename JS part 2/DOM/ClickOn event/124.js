// Event object 
// multiple buttons add event 

// const first_Button = document.querySelector("#one");
// first_Button.addEventListener("click", function(){
//     console.log(this);
// })

// Jb bhi mai kisi bhi element pr event listener add hoga 
// JS Engine --- line by line code execute karta hai
// Browser --- JS Engine + Extra features
// Browser --- JS Engine + WebAPI (Application Program Interface)

// Jb browser ko pta chaly ke user ne event perform kia
// Jo hum listen kr rahy hain
// Browser perform 2 works
// 1.) ---> Callback function hai vo js engine ko degi <--- 
// 2.) ---> Callback function ke sath browser jo event howa haiuski information bhi dega
// yeh info hamein ek object ke form ma mile gi <---

// ************************************************************************
// Perform event 

const all_buttons = document.querySelectorAll("button");

for (const buttons of all_buttons) {
    buttons.addEventListener("click", function(event){
        console.log(event);
    })
}

// ******************** event.target **************************
// const all_buttons = document.querySelectorAll("button");

// for (const buttons of all_buttons) {
//     buttons.addEventListener("click", (e)=>{
//         console.log(e.target);
//     })
// }

// ******************** event.currentTarget **************************
// const all_buttons = document.querySelectorAll("button");

// for (const buttons of all_buttons) {
//     buttons.addEventListener("click", (e)+>{
//         console.log(e.currentTarget);
//     })
// }