document.getElementById('add-task-btn').addEventListener('click', addTask);
document.getElementById('task-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;

    taskItem.querySelector('.edit').addEventListener('click', function() {
        const span = taskItem.querySelector('span');
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.value = span.textContent;

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.classList.add('save');

        saveButton.addEventListener('click', function() {
            span.textContent = editInput.value.trim();
            taskItem.replaceChild(span, editInput);
            taskItem.replaceChild(taskItem.querySelector('.edit'), saveButton);
        });

        taskItem.replaceChild(editInput, span);
        taskItem.replaceChild(saveButton, taskItem.querySelector('.edit'));
    });

    taskItem.querySelector('.delete').addEventListener('click', function() {
        taskItem.remove();
    });

    document.getElementById('task-list').appendChild(taskItem);
    taskInput.value = '';
    taskInput.focus();
}
