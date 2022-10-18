const todo_form = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todolist = document.querySelector(".todo-list");

todo_form.addEventListener("submit", (e)=>{
    e.preventDefault(); // page refresh krne se bachae ga
    // console.log("form submitted successfullt...");
    const newtodotext = todoInput.value;
    const li = document.createElement("li");
    const Li_inner_HTML = ` <span class="text">Do this do that</span> 
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`;

    li.innerHTML = Li_inner_HTML;
    todolist.append(li);
    console.log(newtodotext);
    todoInput.value = ""; // clear text
});

todolist.addEventListener("click", (e) => {
    // check if the user click on done button

    // ********* Done ***************
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through"; 
    }

    // ********* Remove ***************
    if(e.target.classList.contains("remove")){
        const targetedli = e.target.parentNode.parentNode;
        targetedli.remove(); 
    }
    console.log(e.target)
})