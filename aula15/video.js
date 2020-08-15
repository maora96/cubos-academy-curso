/*
  Não altere nada ABAIXO disso até o próximo comentário;

  -- Este código permite que tenhamos uma 
  -- experiência interativa com o usuário;
  -- Não é necessário entendê-lo neste momento.
*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
  Não altere nada ACIMA deste comentário;;
*/

const transformarString = (texto, transformadora) => {
    if (texto.length === 0) {
        console.log("Texto precisa ser maior!");
    }

    let resultado = transformadora(texto);
    resultado += "\n\ncódigo não modificado aqui."
    return resultado;
}


// questão 01 video
const transformaVo = (texto) => {
    let novoTexto = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === 'A' || texto[i] == 'a') {
            novoTexto += 4;
        } else if (texto[i] === 'E' || texto[i] == 'e') {
            novoTexto += 3;
        } else if (texto[i] === 'I' || texto[i] == 'i') {
            novoTexto += 1;
        } else if (texto[i] === 'O' || texto[i] == 'o') {
            novoTexto += 0;
        } else {
            novoTexto += texto[i];
        }
    }

    return novoTexto;
}

// questão 02 video

const removeBlank = (texto) => {
    let novoTexto = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === ' ') {
            novoTexto += ''
        } else {
            novoTexto += texto[i];
        }
    }

    return novoTexto;
}

const vogais = transformarString('Era uma vez em um reino', transformaVo);
const blank = transformarString('Era uma vez em um reino', removeBlank);
console.log(vogais);
console.log(blank);