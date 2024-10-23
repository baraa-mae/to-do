
const input = document.getElementById('todoinput');
const form = document.querySelector('form');
const todoList = document.getElementById('todos');

let todoItems = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    todoList.innerHTML = '';
    todoItems.forEach((task) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <button class="delete-btn" onclick="deleteTodo('${task}')">X</button>
        `;
        todoList.appendChild(li);
    });
}

function addTodo(task) {
    if (task.trim() === '') return;

    todoItems.push(task);
    localStorage.setItem('todos', JSON.stringify(todoItems));
    renderTodos();
    input.value = '';
}

function deleteTodo(task) {
    todoItems = todoItems.filter(item => item !== task);
    localStorage.setItem('todos', JSON.stringify(todoItems));
    renderTodos();
}

form.onsubmit = (event) => {
    event.preventDefault();
    addTodo(input.value);
};

renderTodos();