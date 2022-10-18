// little practice with click event

const all_buttons = document.querySelectorAll(".my-buttons button");

all_buttons. forEach(button => {
    button.addEventListener("click", (e) => {
        console.log(e.target);
        e.target.style.backgroundColor = "pink";
        e.target.style.color = "purple";
        e.target.style.borderColor = "yellow";
    })
})