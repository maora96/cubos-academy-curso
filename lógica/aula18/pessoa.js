const pessoaDiv = document.querySelector(".pessoa");
const titulo = document.querySelector("h1");
const nomeDiv = document.querySelector(".nome");
const idadeDiv = document.querySelector(".idade");
const cpfDiv = document.querySelector(".cpf");
const emailDiv = document.querySelector(".email");
const telDiv = document.querySelector(".tel");

const pessoa = localStorage.getItem("pessoa");
const parsed = JSON.parse(pessoa);

const formatarNome = (objeto) => {
    let nome = objeto.nome;
    let split =  nome.split(" ");
    let nomeCompleto = [];
    split.forEach((item) => {
        let first = item[0].toUpperCase()
        item = item.substring(1);
        let nome = first + item; 
        nomeCompleto.push(nome)
    })
    let final = nomeCompleto.join(" ");
    return final;
}

const formatarIdade = (objeto) => {
    let idade = objeto.idade; 
    idade = idade.toString();
    let final = "";
    if (idade <= 1) {
        idade = idade.toString();
        final = idade + " ano."
    } else {
        final = idade + " anos."
    }
    return final;
}

const formatarCPF = (objeto) => {
    // 11 digitos xxx.xxx.xxx-xx
    let cpf = objeto.cpf;
    if (cpf.length === 11) {
        let final = cpf.split("");
        final.splice(3, 0, ".")
        final.splice(7, 0, ".")
        final.splice(11, 0, "-")
        final = final.join("");
        return final;
    } else {
        console.log("CPF inválido.")
    }
}

const formatarTel = (objeto) => {
    let tel = objeto.tel;
    let final = tel.split("");
    if (tel.length === 11) {
        final.splice(0, 0, "(");
        final.splice(3, 0, ")");
        final.splice(8, 0, "-");
        final.splice(4, 0, " ")
        final = final.join("");
        return final;
    } else if (tel.length === 10) {
        final.splice(0, 0, "(");
        final.splice(3, 0, ")");
        final.splice(8, 0, "-");
        final.splice(4, 0, " ")
        final = final.join("");
        return final;
    } else if (tel.length === 9) {
        final.splice(5, 0, "-");
        final = final.join("");
        return final;
    } else if (tel.length === 8) {
        final.splice(4, 0, "-");
        final = final.join("");
        return final;
    } else {
        console.log("Telefone inválido.")
    }
}

if (parsed != null) {
    titulo.innerText = formatarNome(parsed); 
    nomeDiv.innerText = formatarNome(parsed); 
    idadeDiv.innerText = formatarIdade(parsed); 
    cpfDiv.innerText = formatarCPF(parsed); 
    emailDiv.innerText = parsed.email; 
    telDiv.innerText = formatarTel(parsed);
} else {
    pessoaDiv.innerText = "Não há nenhuma pessoa :/";
}

