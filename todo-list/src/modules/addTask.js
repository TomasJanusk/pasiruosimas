const input = document.querySelector("#name");
const select = document.querySelector("#select");
const date = document.querySelector("#date");
const btn = document.querySelector("#button");
const tbody = document.querySelector("#tbody");

export function addTask() {
  btn.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskInput = input.value;
    const taskDate = date.value;
    const taskSelect = select.value;

    const tr = document.createElement("tr");

    tr.innerHTML = `<th scope="col">${taskInput}</th>            
                    <th scope="col">${taskDate}</th>
                    <th scope="col">${taskSelect}</th>`;
    tbody.append(tr);

    

    const newTask = {
      taskInput,
      taskDate,
      taskSelect,
    };

    const storedData = localStorage.getItem("todo");
    let tasks = [];
    tasks = JSON.parse(storedData);
    tasks.push(newTask);
    localStorage.setItem("todo", JSON.stringify(tasks));

    input.value = "";
    date.value = "";
    select.value = "";
  });
}
