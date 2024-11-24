// Select elements
const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

// Add a new to-do item
addTodoButton.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText === '') return;

    // Create new to-do item
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Label
    const label = document.createElement('span');
    label.textContent = todoText;

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.backgroundColor = '#dc3545';

    // Load sound effect
    const dingSound = new Audio('ding.mp3'); // Ensure 'ding.mp3' is in your project directory

    // Add event listeners
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            dingSound.play(); // Play sound when checkbox is checked
            todoItem.classList.add('checked');
            todoList.appendChild(todoItem); // Move to bottom
        } else {
            todoItem.classList.remove('checked');
        }
    });

    deleteButton.addEventListener('click', () => {
        todoItem.classList.add('fade-out');
        setTimeout(() => todoItem.remove(), 500); // Fade out before removing
    });

    // Append elements
    todoItem.appendChild(checkbox);
    todoItem.appendChild(label);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);

    // Clear input
    todoInput.value = '';
});

// Optional: Press 'Enter' to add item
todoInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTodoButton.click();
    }
});
