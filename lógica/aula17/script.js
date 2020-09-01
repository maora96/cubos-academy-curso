// FIXAÇÃO 
let array = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6];
let dragons = ["aurelion sol", "smaug", "drogon", "viserion", "rhaegal", "toothless"];

// questão 01 
array.forEach((item) => {
    console.log(item);
})

// questão 02 
let novaArray = array.map((x) => {
    return x * 5;
})
console.log(novaArray);

// questão 03 
let outraArray = dragons.map((x, i, a) => {
    for (let i = 0; i < x.length; i++) {
        if (i === (x.length - 1)) {
            let letter = x[x.length - 1].toUpperCase();
            x = x.slice(0, - 1);
            x = x + letter;
        }
    }
    return x;
})

console.log(outraArray);

// questão 04 
let maisUma = array.filter((x) => {
    return (x > 0);
})

console.log(maisUma);

// questão 05 
let arrayPar = array.filter((x) => {
    return (x % 2 === 0);
})

console.log(arrayPar);

// questão 06 
let arrayA = dragons.filter((x) => {
    return (x[0] === "a" || x[0] === "A");
})

console.log(arrayA);

// CASA

// questão 07 
let soma = array.reduce((acc, x) => {
    return x + acc;
}, 0);

console.log(soma);

// questão 08 


// questão 09 


// questão 10 

let maisLongo = dragons.reduce();


/* Questão 08. Utilizando reduce() faça um programa que monta um string separando cada item de um array de strings por vírgulas. Se necessário, utilize outros métodos que você aprendeu para finalizar.

Questão 09. Utilizando reduce() faça um programa que determina o maior valor de um array de números inteiros.

Questão 10. Utilizando reduce() faça um programa que determina o maior string (em comprimento) dentre os elementos de um array de strings.*/ 