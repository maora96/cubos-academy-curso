const form = document.querySelector("form");
const input = document.querySelector("#tarefas-input")
const checkboxAll = document.querySelector("#all-checkbox");
const todasBtn = document.querySelector("#todas-btn");
const todoBtn = document.querySelector("#todo-btn");
const doneBtn = document.querySelector("#done-btn");
const limparBtn = document.querySelector("#limpar-btn");

const todoList = document.querySelector("#todo");
const doneList = document.querySelector("#done");
const counter = document.querySelector(".counter");

function updateCounter() {
    let contagem = todoList.querySelectorAll("li").length;

    if (contagem === 1) {
        counter.innerText = "1 item a fazer";
    } else {
        counter.innerText = `${contagem} itens a fazer`;
    }
}

function updateCheckbox() {
    let contagemTodo = todoList.querySelectorAll("li").length;
    let contagemDone = doneList.querySelectorAll("li").length;

    if (contagemTodo === 0 && contagemDone > 0) {
        checkboxAll.checked = true;
    } else {
        checkboxAll.checked = false; 
    }
}

form.addEventListener("submit", event => {
    event.preventDefault();

    const tarefa = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("input", () => {
        if (checkbox.checked) {
            doneList.append(tarefa);
        } else {
            todoList.append(tarefa);
        }

        updateCounter();
        updateCheckbox()
    })

    let span = document.createElement("span");
    span.innerText = input.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Deletar"
    deleteBtn.addEventListener("click", () => {
        tarefa.remove();
        updateCounter();
        updateCheckbox();
    })
    
    tarefa.append(checkbox, span, deleteBtn);
    todoList.append(tarefa);
    input.value = "";

    updateCounter();
    updateCheckbox();
})

checkboxAll.addEventListener("input", () => {
    if (checkboxAll.checked) {
        let todo = todoList.querySelectorAll("li");
        for (let item of todo) {
            doneList.append(item);
            let check = item.querySelector("input");
            check.checked = true;
        }
    } else {
        let done = doneList.querySelectorAll("li");
        for (let item of done) {
            todoList.append(item);
            let check = item.querySelector("input");
            check.checked = false;
        }
    }

    updateCounter();
    updateCheckbox();
});

todasBtn.addEventListener("click", () => {
    doneList.removeAttribute("hidden");
    todoList.removeAttribute("hidden");
    
    todasBtn.classList.add("focused");
    doneBtn.classList.remove("focused");
    todoBtn.classList.remove("focused");
})

todoBtn.addEventListener("click", () => {
    doneList.setAttribute("hidden", "");
    todoList.removeAttribute("hidden");

    todasBtn.classList.remove("focused");
    doneBtn.classList.remove("focused");
    todoBtn.classList.add("focused");
})

doneBtn.addEventListener("click", () => {
    todoList.setAttribute("hidden", "");
    doneList.removeAttribute("hidden");

    todasBtn.classList.remove("focused");
    doneBtn.classList.add("focused");
    todoBtn.classList.remove("focused");
})

limparBtn.addEventListener("click", () => {
    let done = doneList.querySelectorAll("li");
    for (let item of done) {
        item.remove();
    }

    updateCheckbox();
})