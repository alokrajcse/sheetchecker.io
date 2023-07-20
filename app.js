// Replace the SHEET_ID with your Google Sheets ID
const SHEET_ID = "YOUR_GOOGLE_SHEET_ID";

// Function to add a task to the Google Sheets and update the web app
function addTask() {
    const taskName = document.getElementById("taskInput").value;

    if (taskName.trim() !== "") {
        // Append the task to the Google Sheets
        google.script.run.withSuccessHandler(updateTaskList).addTaskToSheet(taskName);

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
