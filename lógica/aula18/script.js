const button = document.querySelector("button");
const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const cpf = document.querySelector("#cpf");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");

let dados = {}; 

button.addEventListener("click", () => {
    dados.nome = nome.value;
    dados.idade = idade.value;
    dados.cpf = cpf.value; 
    dados.email = email.value;
    dados.tel = tel.value; 
    const dadosString = JSON.stringify(dados);
    localStorage.setItem("pessoa", dadosString);
    location.href = 'pessoa.html';
})