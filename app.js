// Function to add a task using Fetch API
function addTask() {
    const taskName = document.getElementById("taskInput").value;

    if (taskName.trim() !== "") {
        fetch('https://script.google.com/macros/s/AKfycbwC4BMy8gG4gZ5RgU9OrKq3E6q1yjilJyhxEW2Cu_msblDUI-MDj7sy1vNZAYSZZsJjsg/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                taskName: taskName
            })
        })
        .then(response => response.json())
        .then(data => {
            updateTaskList(data);
        })
        .catch(error => console.error('Error adding task:', error));

        // Clear the input field after adding the task
        document.getElementById("taskInput").value = "";
    }
}

// Function to update the task list in the web app
function updateTaskList(tasks) {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task) => {
        const listItem = document.createElement("li");
        listItem.textContent = task[0];
        taskList.appendChild(listItem);
    });
}
