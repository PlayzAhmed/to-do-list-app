function addTask(taskName, parent) {
    let taskContainer = document.createElement("div");
    taskContainer.className = "task-container";
    let taskTitle = document.createElement("h2");
    taskTitle.className = "task-name";
    let buttonsContainer = document.createElement("div");
    buttonsContainer.className = "buttons-container";
    let deleteButton = document.createElement("button");
    deleteButton.id = "delete";
    let editButton = document.createElement("button");
    editButton.id = "edit";
    let doneButton = document.createElement("button");
    doneButton.id = "done";
    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash-can";
    let editIcon = document.createElement("i");
    editIcon.className = "fa-solid fa-pencil";
    let doneIcon = document.createElement("i");
    doneIcon.className = "fa-solid fa-check";

    deleteButton.appendChild(deleteIcon);
    editButton.appendChild(editIcon);
    doneButton.appendChild(doneIcon);

    deleteButton.addEventListener("click", () => {
        taskContainer.remove();
    });

    editButton.addEventListener("click", () => {
        const newTaskName = prompt("Edit your task:", taskTitle.textContent);
        if (newTaskName.trim() !== "") {
            taskTitle.textContent = newTaskName.trim();
        }
    });

    doneButton.addEventListener("click", () => {
        taskContainer.classList.add("done");
    });

    buttonsContainer.append(deleteButton, editButton, doneButton);
    taskTitle.textContent = taskName;

    taskContainer.append(taskTitle, buttonsContainer);
    parent.append(taskContainer);
}

const addTaskButton = document.getElementById("add-task-btn");
const inputField = document.getElementById("task-name-input-field");
const tasksContainer = document.getElementById("tasks-container");

addTaskButton.addEventListener("click", () => {
    const taskName = inputField.value.trim();
    if (taskName !== "") {
        addTask(taskName, tasksContainer);
        inputField.value = "";
    }
});