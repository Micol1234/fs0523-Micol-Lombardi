document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addButton = document.getElementById("add-button");
    const taskList = document.getElementById("task-list");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement("li");
            li.textContent = taskText;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete-button";

            li.appendChild(deleteButton);

            taskList.appendChild(li);
            taskInput.value = "";

            li.addEventListener("click", function () {
                li.classList.toggle("completed");
            });

            deleteButton.addEventListener("click", function (event) {
                event.stopPropagation();
                taskList.removeChild(li);
            });
        }
    });

    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
});