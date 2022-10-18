// static list vs live list
// querySelectorAll provide static list
// getElementsBySomething provide live list


// ************** static list ********************
// Don't be reflect
// node-list showing 5 list item and individually 1 item add this is was showing individually...

// const listItem = document.querySelectorAll(".todo-list li"); // --> Node list

// const sixth_li = document.createElement("li");
// sixth_li.textContent="Li item 6";

// const ul = document.querySelector(".todo-list");
// ul.append(sixth_li);

// console.log(listItem);

// ************** live list ********************
// provide reflection

const ul = document.querySelector(".todo-list");
const listItem = ul.getElementsByTagName("li"); //  --> HTML list

const sixth_li = document.createElement("li");
sixth_li.textContent="Li item 6";

ul.append(sixth_li);

console.log(listItem);