// this keyword

// *********************** Anonymous Function *****************************
// this keyword value button itself

// const btn = document.querySelector(".btn-headline");
// function myfunc()
// {
//     console.log("Clicked me...");
//     console.log("value of this...!");
//     console.log(this);
// }
// btn.addEventListener("click", myfunc);

// *********************** Arrow Function ---> level up *****************************
// this keyword provide window object in arrow function

const btn = document.querySelector(".btn-headline");

btn.addEventListener("click", () => {
    console.log("Clicked me...");
    console.log("value of this...!");
    console.log(this);
});




