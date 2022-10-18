// Add new HTML elements to page

// innerHTML to add HTML element
const todoList = document.querySelector(".todo-list");
console.log(todoList.innerHTML);


// todoList.innerHTML = "<li>Hello</li>";
todoList.innerHTML += "<li>Hello</li>";

// when you should use it, when you should not
// Not add new elements beacuseit is performance issues
// But change the HTML it is much better than add innerHTML