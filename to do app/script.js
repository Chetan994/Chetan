const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button>Delete</button>
  `;

  li.querySelector("span").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  li.querySelector("button").addEventListener("click", () => {
    taskList.removeChild(li);
  });

  taskList.appendChild(li);
  taskInput.value = "";
}
