const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading = document.querySelector(".heading");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeText(element, text, color, time){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }
            else{
                reject("Element not found!");
            }
        },time)
    })
}

changeText(heading1, "One", "red", 1000) // return promise so use then method
    .then(()=>changeText(heading2, "Two", "purple", 1000))
    .then(()=>changeText(heading3, "Three", "brown", 1000))
    .then(()=>changeText(heading4, "Four", "orange", 3000))
    .then(()=>changeText(heading5, "Five", "pink", 2000))
    .then(()=>changeText(heading6, "Six", "cyan", 2000))
    .then(()=>changeText(heading7, "Seven", "greenyellow", 1000))

    .catch((error)=>{
        alert(error);
    })

