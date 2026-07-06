const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">Delete</button>
        `;

        taskList.appendChild(li);

    });

}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
}

if (addTask) {

    addTask.addEventListener("click", () => {

        const task = taskInput.value.trim();

        if (task === "") return;

        tasks.push(task);

        saveTasks();

        displayTasks();

        taskInput.value = "";

    });

    displayTasks();

}