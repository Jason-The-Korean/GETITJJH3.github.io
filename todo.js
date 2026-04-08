let tasks = [];

document.getElementById("addBtn").addEventListener("click", () => {
    const input = document.getElementById("taskInput");
    if (input.value.trim() === "") return;
    tasks.push(input.value);
    input.value = "";
    render();
});

const render = () => {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        li.onclick = () => {
            if (li.style.textDecoration === "line-through") {
                li.style.textDecoration = "none";
                li.style.color = "black";
            } else {
                li.style.textDecoration = "line-through";
                li.style.color = "gray";
            }
        };


        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";

        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            tasks.splice(index, 1);
            render();
        };

        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
};