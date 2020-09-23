// exercício resolvido 01
const arr1 = [1, 2, 3];
const arr2 = [5, 6];
const arr3 = [...arr1, 4, ...arr2];
console.log(arr3);

// exercício resolvido 02

const arr4 = [0, ...arr3, 7];
console.log(arr4)

// exercício resolvido 03

const arr5 = [1, 2, 3, 4, 5]

const [primeiro, segundo, ...resto] = arr5;
console.log(resto)

// exercício resolvido 04

const dados = {
    nome: "André",
    idade: 23, 
    profissao: "Desenvolvedor",
    altura: 176,
    peso: 70
}

const trabalho = {
    empresa: "Cubos",
    nivel: "Desenvolvedor Junior",
    cargaHoraria: "40/semana"
}

const {peso, altura, ...resto2} = dados;
const novo = {...resto2, ...trabalho};
console.log(novo)

// exercícios de casa
// exercício 01

const arr6 = ['a', 'b', 'c'];
const arr7 = ['d', 'e'];

const arr8 = [...arr6, ...arr7];
console.log(arr8)

// exercício 02

const arr9 = ['1', '2', ...arr6, '3', '4', ...arr7, '5', '6'];
console.log(arr9);

// exercício 03

const carro = {
    modelo: "Gol",
    marca: "Volkswagen",
    cor: "Vermelho",
    potenciaCV: 80,
    preco: 3000000
}

const {preco, ...resto3} = carro;
console.log(resto3);

// exercício 04

function ordenar(...args) {
    let array = [...args];
    array.sort((a, b) => a - b);
    console.log(array);
}

// exercício 05
ordenar(3, 2, 5);

// exercício 06

const array10 = [4, 2, 1, 5, 9];
ordenar(...array10);
