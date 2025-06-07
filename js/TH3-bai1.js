let tasks = [
  { id: 1, name: "Mua thú cưng", check: false },
  { id: 2, name: "Học lập trình", check: false },
  { id: 3, name: "Tập thể dục", check: false }
];

const taskname = document.getElementById("taskName");
const taskList = document.getElementById("taskList");
let currentTaskEdit = null;
let editModal;

function check(event) {
    const clickedCb = event.target;
    var task =tasks.find(t => t.id == clickedCb.dataset.id);
    task.check = clickedCb.checked;

    const taskContainer = clickedCb.closest('.task');
    const taskTitle = taskContainer.querySelector('h4');

    if (clickedCb.checked) {
        taskTitle.style.textDecoration = 'line-through';
        taskTitle.style.opacity = '0.6'; // cho mờ nhẹ đẹp hơn
    } else {
        taskTitle.style.textDecoration = 'none';
        taskTitle.style.opacity = '1';
    }
}

function addTask(){
  const name = taskname.value.trim();
  if (!name) return alert("Vui lòng nhập đầy đủ");
  const newTask = {
      id: tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
      name,
      check: false
    };
    tasks.push(newTask);

    //Thêm phần tử
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    taskDiv.innerHTML = `
    <p class="task-number">Task ${newTask.id}</p>
    <div class="content">
        <input type="checkbox" class="checkbox" data-id="${newTask.id}" onclick="check(event)">
        <div class="card">
            <div class="card-body">
                <h4>${newTask.name}</h4>
            </div>
        </div>
        <button type="button" class="btn delete" onclick="deleteTask(event)">Xóa</button>
        <button type="button" class="btn edit" onclick="editTask(event)">Sửa</button>

    </div>
    `;
    taskList.appendChild(taskDiv);
    taskname.value = "";
}

function deleteTask(event){
    const bt = event.target;
    const taskDiv = bt.closest('.task');
    const clickedCb = taskDiv.querySelector('.checkbox');
    tasks = tasks.filter(task => task.id !== clickedCb.dataset.id);

    taskDiv.remove();
}

function editTask(event){
    const bt = event.target;
    currentTaskEdit = bt.closest('.task');

    const currentText = currentTaskEdit.querySelector("h4").innerText;

    document.getElementById("editInput").value = currentText;
    
    editModal = new bootstrap.Modal(document.getElementById('editModal'));
    editModal.show();

}

function confirmEdit() {
    const newText = document.getElementById("editInput").value;

    if (currentTaskEdit) {
        currentTaskEdit.querySelector("h4").innerText = newText;
    }
    const clickedCb = currentTaskEdit.querySelector('.checkbox');

    const taskToEdit = tasks.find(task => task.id === clickedCb.dataset.id);
    if (taskToEdit) {
        taskToEdit.name = newText;
    }

    editModal.hide();
}
