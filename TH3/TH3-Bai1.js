const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

let tasks = [];

function addTask(){
    if(taskInput.value === ""){
        alert("Dien thong tin vao o input");
    }
    tasks.push({ content: value, isDone: false });
    taskInput.value = "";
    saveData();
    renderTasks();
}

function addTask(){
    const value = taskInput.value;
    if(value === ""){
        alert("Điền thông tin vào ô input");
        return;
    }
    tasks.push({ content: value, isDone: false });
    taskInput.value = "";
    saveData();
    renderTasks();
}

function renderTasks(){
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.content;

        if(task.isDone) 
            li.classList.add("checked");

        li.addEventListener("click", (e) => {
            if(e.target.tagName !== "SPAN"){ 
                tasks[index].isDone = !tasks[index].isDone;
                saveData();
                renderTasks();
            }
        });

        const span = document.createElement("span");
        span.textContent = "\u00D7";

        span.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveData();
            renderTasks();
        });

        li.appendChild(span);
        taskList.appendChild(li);
    });
}

function saveData(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showData(){
   const tasksJSON = localStorage.getItem("tasks");
   if(tasksJSON){
       tasks = JSON.parse(tasksJSON);
   } 
   else {
       tasks = [];
   }
}

showData();
renderTasks();