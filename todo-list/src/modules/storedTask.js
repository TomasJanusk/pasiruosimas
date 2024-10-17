const tbody = document.querySelector("#tbody");

export function loadFromStorage() {
  const storedData = localStorage.getItem("todo");
  let tasks = [];
  tasks = JSON.parse(storedData);

  tasks.forEach((task) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<th scope="col" >${task.taskInput}</th>            
                    <th scope="col" >${task.taskDate}</th>
                    <th scope="col" >${task.taskSelect}</th>`;
    tbody.append(tr);
    tr.addEventListener("click", () => {
      tr.style.textDecoration = "line-through";
    });
  });
  console.log(tasks);
}
