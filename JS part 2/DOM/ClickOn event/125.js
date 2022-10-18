// JS is single threaded

// Behind the scene 
console.log("Script start !!!");
const all_buttons = document.querySelectorAll(".my-buttons button");

// Delay to execute buttons
for(let buttons of all_buttons){
    buttons.addEventListener("click", (e)=>{
        let num = 0;
        for(let i = 0; i<=100000000; i++){
            num += i;
        }
        console.log(e.currentTarget.textContent);
    })
}

let outer_Var = 0;
for(let i = 0; i<=100000; i++)
{
    outer_Var += i;
}
console.log("Value of outer variable is: ", outer_Var);
console.log("Script end !!!");
