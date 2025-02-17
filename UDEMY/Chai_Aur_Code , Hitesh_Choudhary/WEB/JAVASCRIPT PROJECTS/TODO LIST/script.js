document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem("task")) || [];


    addTaskButton.addEventListener('click',() => {
        let inputText = todoInput.value.trim();
        if(inputText === "") return;

        const newTask = {
            date: Date.now(),
            text: inputText,
            isCompleted: false,
        }
        tasks.push(newTask);
        saveTaskToLocalStorage();
        todoInput.value = "";
        console.log(tasks);
    });

    function saveTaskToLocalStorage(){
        localStorage.setItem("task", JSON.stringify(tasks));
    }

    function renderTask(tasks){
        const list = document.createElement("li");
        list.id = "data-id";
        list.innerHTML = `<span> ${tasks.text} </span>
                          <button> Delete </button>`;
        todoList.appendChild(list);
    }
})