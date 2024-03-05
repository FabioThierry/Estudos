const inputTask = document.querySelector(".input-task");
const btnAdd = document.querySelector(".btn-add");
const tbody = document.querySelector(".tbody");

btnAdd.addEventListener("click", addNewTask);

function addNewTask(event) {
  event.preventDefault();

  if (!inputTask.value) return;

  const tr = document.createElement("tr");
  const tdTask = document.createElement("td");
  const taskText = document.createTextNode(inputTask.value);
  const btnDone = document.createElement("button");
  btnDone.dataset.id = Date.now();
  btnDone.textContent = "Feito";
  btnDone.addEventListener("click", markAsDone);

  tdTask.appendChild(taskText);
  tr.appendChild(tdTask);
  tr.appendChild(btnDone);
  tbody.appendChild(tr);

  inputTask.value = "";

  function markAsDone(event) {
    const tdTask = event.target.parentElement.querySelector("td");
    const strikeText = document.createElement("s");

    strikeText.textContent = tdTask.textContent;
    tdTask.textContent = "";
    tdTask.appendChild(strikeText);
  }
}
