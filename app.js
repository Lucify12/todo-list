const input = document.querySelector(".todo-input");
const list = document.querySelector(".todo-list");
const form = document.querySelector(".todo-form");

/*
the if statement checks if the length
is less than 0 then it runs if not then
nothing happens
*/
function createTodo() {
    if (input.value.trim().length > 0) {
        const todo = document.createElement("li");
        todo.classList.add("todo-item");
        todo.innerHTML = input.value;

        const closebtn = document.createElement("button");
        closebtn.classList.add("todo-close");
        closebtn.onclick = removeTodo;
        closebtn.innerHTML = "x";

        list.appendChild(todo);
        todo.appendChild(closebtn);
    }
}
// targets the parent of which the button is on and then removes
function removeTodo(e) {
    e.target.parentElement.remove();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    createTodo();
})