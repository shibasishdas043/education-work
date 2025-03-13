document.addEventListener("DOMContentLoaded", () => {
    // GET DOM ELEMENTS
    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    // LOAD TASKS FROM LOCAL STORAGE
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // RENDER TASKS ON PAGE LOAD
    renderTasks();

    // ADD TASK TO THE LIST
    addTaskButton.addEventListener('click', () => {
        const inputText = todoInput.value.trim();
        if (inputText === "") return;

        const newTask = {
            id: Date.now(), // Unique ID for each task
            text: inputText,
            isCompleted: false,
        };

        tasks.push(newTask);
        saveTasks();
        renderTasks();

        todoInput.value = ""; // Clear input field
    });

    // RENDER TASKS
    function renderTasks() {
        todoList.innerHTML = ""; // Clear the list before rendering

        tasks.forEach(task => {
            const listItem = document.createElement("li");
            listItem.dataset.id = task.id; // Use dataset to store the task ID

            if (task.isCompleted) {
                listItem.classList.add("completed");
            }

            listItem.innerHTML = `
                <span>${task.text}</span>
                <button class="delete-btn">Delete</button>
            `;

            // TOGGLE TASK COMPLETION
            listItem.addEventListener("click", (e) => {
                if (e.target.tagName === "BUTTON") return; // Ignore button clicks
                task.isCompleted = !task.isCompleted;
                listItem.classList.toggle("completed");
                saveTasks();
            });

            // DELETE TASK
            const deleteButton = listItem.querySelector(".delete-btn");
            deleteButton.addEventListener("click", () => {
                tasks = tasks.filter(t => t.id !== task.id); // Remove the task from the array
                saveTasks();
                renderTasks();
            });

            todoList.appendChild(listItem);
        });
    }


    function renderTask(tasks){
        const list = document.createElement("li");
        list.id = "data-id";
        if (tasks.completed) list.classList.add("completed");

        list.innerHTML = `<span> ${tasks.text} </span>
                          <button> Delete </button>`;

        list.addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON"){
                return;
            }
            tasks.completed = !tasks.completed;
        });
        todoList.appendChild(list);

    // SAVE TASKS TO LOCAL STORAGE
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));

    }
});