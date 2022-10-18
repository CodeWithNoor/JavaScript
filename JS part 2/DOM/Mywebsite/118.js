// some old method to support poor IE
// appenedChild
// insertBefore
// replaceChild
// removeChild

// const todoList = document.querySelector(".todo-list");

// new element
const li = document.createElement("li");
li.textContent = "Welcome to JavaScript";

const referenceNode = document.querySelector(".first-todo")

// todoList.appendChild(li);
// todoList.insertBefore(li, refrenceNode);
todoList.replaceChild(li, referenceNode);
// todoList.removeChild(referenceNode);








