// document.createElement
// appened
// prepned
// remove

// *******************************************************
// const todoItem = document.createElement("li");
// const newtodoItemtext = document.createTextNode("He is intelligent");

// todoItem.textContent = "Hello...!"

// const todoList = document.querySelector(".todo-list");

// // todoItem.append(newtodoItemtext);
// todoList.append(todoItem);
// console.log(todoItem);

// ********** remove *************
// const todo = document.querySelector(".togo-list li");
// todo.remove();
// console/log(todo)

// ********** before *************
const todoItem = document.createElement("li");
todoItem.textContent = "Hello...!"

const todoList = document.querySelector(".todo-list");
todoList.before(todoItem);

// appened add end element
// pre appened add starting element

