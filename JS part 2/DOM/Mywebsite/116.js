// element.insertadjacentHTML(where, HTML)
// beforebegin
// afterbegin  --> as it is work prepend
// beforeend  --> as it is work appened
// afterend

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("afterbegin", "<li>you teach me</li>")

// **********************************************************
// const signupForm = document.querySelector(".signup-form");
// signupForm.insertAdjacentHTML("afterend", "<button>confirm</button>")



