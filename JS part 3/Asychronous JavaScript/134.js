// callbacks, callback hell, pyramid of doom
// Asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// setTimeout(()=>{
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "violet";

//     setTimeout(()=>{
//         heading2.textContent = "Heading 2";
//         heading2.style.color = "purple";
//     setTimeout(()=>{
//         heading3.textContent = "Heading 3";
//         heading3.style.color = "pink";
//     setTimeout(()=>{
//         heading4.textContent = "Heading 4";
//         heading4.style.color = "blue";
//     },1000)
//     },1000)
//     },1000)
// },1000);

// ********************************************************

// Order maintain is very important real life and technology

// setTimeout(()=>{
//     heading2.textContent = "Heading 2";
//     heading2.style.color = "red";
// },5000);


// *********************************************************
// *********** Task ***************

//  Text               Delay               Color 

//  One                 1s                 violet 
//  Two                 2s                 purple 
//  Three               2s                 red    
//  Four                1s                 blue   
//  Five                2s                 pink   

// *************** Task perform ******************
// ************** callback hell ****************
// ************** nested callbacks ***************

// setTimeout(() => {
//     heading1.textContent = "One";
//     heading1.style.color = "violet";

//     setTimeout(() => {
//         heading2.textContent = "Two";
//         heading2.style.color = "purple";
//         setTimeout(() => {
//             heading3.textContent = "Three";
//             heading3.style.color = "red";
//             setTimeout(() => {
//                 heading4.textContent = "Four";
//                 heading4.style.color = "blue";
//                 setTimeout(() => {
//                     heading5.textContent = "Five";
//                     heading5.style.color = "pink";
//                 }, 2000)
//             }, 1000)
//         }, 2000)
//     }, 2000)
// }, 1000);


// *********** As it is work with function ******************
// *********** callback hell *******************

function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;            
        }
        if(onSuccessCallback){
            onSuccessCallback()
        }
        else{
        if(onFailureCallback){
            onFailureCallback()
        }
    }
  }, time)
}

// ************* pyramid of doom **************
changeText(heading1, "One", "violet", 3000,()=>{
    changeText(heading2, "Two", "purple", 2000,()=>{
        changeText(heading3, "Three", "red", 1000,()=>{
            changeText(heading4, "Four", "yellow", 2000, ()=>{
                changeText(heading5, "Five", "blue", 2000, ()=>{
                    changeText(heading6, "Six", "grey", 2000, ()=>{
                        changeText(heading7, "Seven", "orange", 1000, ()=>{

                        },()=>{console.log("heading 7 does not exsist")})
                    },()=>{console.log("heading 6 does not exsist")})
                }, ()=>{console.log("heading 5 does not exsist")})
            },()=>{console.log("heading 4 does not exsist")})
        },()=>{console.log("heading 3 does not exsist")})
    }, ()=>{console.log("headin g2 does not esist")})
}, ()=> {console.log("heading 1 does not exsist")});


