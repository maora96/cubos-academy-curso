const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () =>{
    if (input.type == 'password') {
        input.setAttribute('type', 'text');
        button.innerText = "Esconder senha";
    } else {
        input.setAttribute('type', 'password');
        button.innerText = "Mostrar senha";
    }
})

const inputq04 = document.querySelector("#q04");

inputq04.addEventListener("focus", () => {
    inputq04.setAttribute('type', 'text');
})

inputq04.addEventListener("blur", () => {
    inputq04.setAttribute('type', 'password');
})