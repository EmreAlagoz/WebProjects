const form = document.querySelector("form");
const input = document.querySelector(".input");
const todos = document.querySelector(".todos")
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addTodo();
    
});

function addTodo() {
    const todo = input.value;
    if (todo) {
        const todoEl = document.createElement('li');
        todoEl.innerText = todo;

        todoEl.addEventListener('click',()=>{
            todoEl.classList.toggle('completed');
        });
        todoEl.addEventListener('contextmenu', (e) =>{
            e.preventDefault();
            todoEl.remove();
        });
        todos.appendChild(todoEl);
        input.value = "";
        updateTodos();
    }
}
function updateTodos() {
    const todosEl = document.querySelector('li');
    const todos=[];
    todosEl.forEach((todoEl) => {
        todos.push({
            text:todoEl.innerText,
            completed:todoEl.classList.contains("completed"),
        });
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}