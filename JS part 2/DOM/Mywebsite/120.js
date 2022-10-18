// How to get the dimension of the element...
// height, width, top, left, right, bottom...

const sectionTodo = document.querySelector(".section-todo");
const info_section_todo = sectionTodo.getBoundingClientRect();

// Individually take a width and height
// const info_section_todo = sectionTodo.getBoundingClientRect().width;
// const info_section_todo = sectionTodo.getBoundingClientRect().height;

console.log(info_section_todo);
