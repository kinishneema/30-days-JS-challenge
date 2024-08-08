document.getElementById("task-form").addEventListener("submit", addTask);

let tasks = [];

function addTask(e) {
  e.preventDefault();

  const title = document.getElementById("task-title").value;
  const desc = document.getElementById("task-desc").value;
  const date = document.getElementById("task-date").value;

  const task = {
    id: Date.now(),
    title,
    desc,
    date,
  };

  tasks.push(task);
  displayTasks();
  e.target.reset();
}
function displayTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${task.title} - ${task.desc} - ${task.date}</span>
            <span>
                <span class="edit" onclick="editTask(${task.id})">Edit</span>
                <span class="delete" onclick="deleteTask(${task.id})">Delete</span>
            </span>
        `;
    taskList.appendChild(li);
  });
}
function editTask(id) {
  const task = tasks.find((task) => task.id === id);
  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.desc;
  document.getElementById("task-date").value = task.date;

  deleteTask(id);
}
function deleteTask(id) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks = tasks.filter((task) => task.id !== id);
    displayTasks();
  }
}
