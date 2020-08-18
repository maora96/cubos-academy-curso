const button = document.querySelector("button");
const textoInput = document.querySelector("#texto");

// questão 01
let entrada = "";

button.addEventListener("click", () => {
   entrada = textoInput.value;
   //questao02(entrada);
   //questao03(entrada);
   //questao04(entrada);
   //questao05(entrada);
   //questao06(entrada);
   //questao07(entrada);
   //questao08(entrada);
   //questao09(entrada);
   questao10(entrada);
})


// questão 02 
function questao02(entrada) {
    if (entrada.includes("desenvolvimento")) {
        alert("Sim");
    } else {
        alert("Não")
    }
}

// questão 03

function questao03(entrada) {
    entrada = entrada.trim();
    entrada = entrada.toLowerCase();
    alert(entrada);
}

// questão 04

function questao04(entrada) {
    let meio = entrada.split(".");
    let quase = "";
    for (let i = 0; i < meio.length; i++) {
        quase += meio[i];
    }
    let semifinal = quase.split("-");
    let final = "";
    for (let i = 0; i < semifinal.length; i++) {
        final += semifinal[i];
    }
    alert(final); 
}

// questão 05

function questao05(entrada) {
    let nomes = entrada.split(" ");
    let resultado = "";
    for (let i = 0; i < nomes.length; i++) {
        for (let x = 0; x < nomes[i].length; x++) {
            if (x === 0) {
                resultado += nomes[i][x].toUpperCase();
            } else if(x == (nomes[i].length - 1)) {
                resultado += nomes[i][x] + " ";
            } else {
                resultado += nomes[i][x];
            }
        } 
    }
    alert(resultado);
}

function questao06(entrada) {
    let resultado = "";
    let meio = entrada.split (" ");
    for (let i = (meio.length -1); i != - 1; i--) {
        resultado += meio[i] + " ";
    }
    alert(resultado);
}

function questao07(entrada) {
    let meio = entrada.split(" ");
    let resultado = "";
    for (let i = 0; i < meio.length; i++) {
        if (meio[i] === "muito") {
            meio[i] = "MUITO";
        }
        
        if (i != meio.length - 1) {
            resultado += meio[i] + " "
        } else {
            resultado += meio[i];
        }
    }
    alert(resultado);
}

function questao08(entrada) {
    let meio = entrada.split(" ");
    let ultimos = meio[meio.length - 1];
    let final = ultimos.padStart(19, "**** ")
    alert(final);
}

function questao09(entrada) {
    let um = entrada.slice(0,5);
    let dois = entrada.slice(5)
    let final = um + "-" + dois;
    alert(final);
}

function questao10(entrada) {
    let final = "";
    if (entrada.length == 8) {
        entrada = "9" + entrada;
        let um = entrada.slice(0,5);
        let dois = entrada.slice(5)
        final = um + "-" + dois;
    } else if (entrada.length == 9) {
        let um = entrada.slice(0,5);
        let dois = entrada.slice(5)
        final = um + "-" + dois;
    } else if (entrada.length == 10) {
        let um = entrada.slice(0,2);
        um = "(" + um + ")";
        let dois = entrada.slice(2, 6);
        let tres = entrada.slice(6);
        final = um + " " + "9" + dois + "-" + tres;
    } else {
        let um = entrada.slice(0,2);
        um = "(" + um + ")";
        let dois = entrada.slice(2, 6);
        let tres = entrada.slice(6);
        final = um + " " + dois + "-" + tres;
    }
    alert(final);
}