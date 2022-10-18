const body = document.querySelector("body");
const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// ******* event bubbling or propagation *********
// child.addEventListener("click", ()=>{
//     console.log("You clicked on child");
// })

// parent.addEventListener("click", ()=>{
//     console.log("You clicked on parent");
// })

// grandparent.addEventListener("click", ()=>{
//     console.log("You clicked on grandparent");
// })

// body.addEventListener("click", ()=>{
//     console.log("You clicked on body");
// })

// ******* event capturing *********
// one click and multiple trigger
// 3rd argument pass true

// child.addEventListener("click", ()=>{
//     console.log("capture !!! You clicked on child");
// }, true)

// parent.addEventListener("click", ()=>{
//     console.log("capture !!! You clicked on parent");
// }, true)

// grandparent.addEventListener("click", ()=>{
//     console.log("capture !!! You clicked on grandparent");
// }, true)

// body.addEventListener("click", ()=>{
//     console.log("capture !!! You clicked on body");
// }, true)

// ************ not capture **************
// child.addEventListener("click", ()=>{
//     console.log("bubble !!! child");
// })

// parent.addEventListener("click", ()=>{
//     console.log("bubble !!! parent");
// })

// grandparent.addEventListener("click", ()=>{
//     console.log("bubble !!! grandparent");
// })

// body.addEventListener("click", ()=>{
//     console.log("bubble !!! body");
// })

// *************** event delegation **************
// grandparent.addEventListener("click", ()=>{
//     console.log("you clicked something !!!");
// })

grandparent.addEventListener("click", (e)=>{
    console.log(e.target.textContent);
})


