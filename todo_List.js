document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const tasksList = document.getElementById('tasks-list');
    const prioritySelect = document.getElementById('priority-select');
    const dueDateInput = document.getElementById('due-date');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        const priority = prioritySelect.value;
        const dueDate = dueDateInput.value;

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const taskItem = document.createElement('li');
        
        const taskDetails = document.createElement('div');
        taskDetails.classList.add('task-details');

        const taskTextSpan = document.createElement('span');
        taskTextSpan.classList.add('task-text');
        taskTextSpan.textContent = taskText;

        const taskPrioritySpan = document.createElement('span');
        taskPrioritySpan.classList.add('task-priority');
        taskPrioritySpan.textContent = `Priority: ${priority}`;

        const taskDueDateSpan = document.createElement('span');
        taskDueDateSpan.classList.add('task-due-date');
        taskDueDateSpan.textContent = `Due: ${dueDate}`;

        taskDetails.appendChild(taskTextSpan);
        taskDetails.appendChild(taskPrioritySpan);
        taskDetails.appendChild(taskDueDateSpan);

        const taskButtons = document.createElement('div');
        taskButtons.classList.add('task-buttons');

        const completeButton = document.createElement('button');
        completeButton.classList.add('complete-btn');
        completeButton.textContent = 'Complete';

        completeButton.addEventListener('click', () => {
            taskTextSpan.classList.toggle('task-completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', () => {
            tasksList.removeChild(taskItem);
        });

        taskButtons.appendChild(completeButton);
        taskButtons.appendChild(deleteButton);

        taskItem.appendChild(taskDetails);
        taskItem.appendChild(taskButtons);

        tasksList.appendChild(taskItem);

        taskInput.value = '';
        prioritySelect.value = 'low';
        dueDateInput.value = '';
    }
});