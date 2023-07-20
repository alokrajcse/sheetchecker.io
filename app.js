// Function to fetch tasks from Google Sheets
function fetchTasks() {
    fetch('https://script.google.com/macros/s/your_web_app_deployed_url/exec')
        .then(response => response.json())
        .then(data => {
            updateTaskList(data);
        })
        .catch(error => console.error('Error fetching tasks:', error));
}

// Function to add a task using Fetch API
function addTask() {
    const taskName = document.getElementById("taskInput").value;

    if (taskName.trim() !== "") {
        fetch('https://script.google.com/macros/s/AKfycbw3wHVMnTSlGS6LhPUo9Hr5x-v1klspr-XAX9ot03lbFXJ88IcVquXKpUWhov0bJiWiLA/exec', {
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

// Fetch tasks when the page loads
fetchTasks();
