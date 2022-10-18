// keypress event
// mouseover event

// ************* keypress event *****************
// const body = document.querySelector("body");

// body.addEventListener("keypress", (e) => {
//     console.log(e.key);
// })

// // ***************** mouseover event *****************
// const main_btn = document.querySelector(".btn-headline");

// main_btn.addEventListener("mouseover", ()=>{
//     console.log("mouse over event occured....")
// })

// ***************** mouseleave event *****************
const main_btn = document.querySelector(".btn-headline");

main_btn.addEventListener("mouseleave", ()=>{
    console.log("mouse leave event occured....")
})