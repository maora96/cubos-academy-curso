// FIXAÇÃO 

// questão 01

const dragons = ['aurelion sol', 'drogon', 'viserion', 'rhaegal', 'smaug', 'toothless']
for (const element of dragons) {
    console.log(element)
}

// questão 02 

let novo = [];
const inteiros = [2, 3, 5, 9, 10, 13, 16, 18];
for (const element of inteiros) { 
    if (element > 10) {
        novo.push(element)
    }
}
console.log(novo);

// questão 03 

dragons.forEach((item) => {
    console.log(item);
})

// questão 04 

dragons.forEach((item, i) => {
    console.log(item, i);
})

// questão 05 

let dobro = [];
inteiros.forEach((item) => {
    dobro.push(item * 2); 
})
console.log(dobro);

// CASA 

// questão 06 

const partidas = [
    {
        time1: "cheetahs", 
        time2: "tigers",
        time1gols: 3,
        time2gols: 2
    },
    {
        time1: "cheetahs", 
        time2: "tigers",
        time1gols: 2,
        time2gols: 2
    },
    {
        time1: "cheetahs", 
        time2: "tigers",
        time1gols: 1,
        time2gols: 2
    },
    {
        time1: "cheetahs", 
        time2: "tigers",
        time1gols: 3,
        time2gols: 4
    }
]

let time1Partidas = 0;
let time2Partidas = 0;
let empates = 0;
partidas.forEach((item, i) => {
    if (item.time1gols > item.time2gols) {
        time1Partidas++
    } else if (item.time2gols > item.time1gols) {
        time2Partidas++
    } else {
        empates++ 
    }
})

console.log(time1Partidas + " foi/foram vencida(s) pelo " + partidas[0].time1 + ", " + time2Partidas + " foi/foram vencida(s) pelo " + partidas[0].time2 + " e " + empates + " partida(s) resultaram em empate.") 

// questão 07 

let time1pontos = (time1Partidas * 3) + empates;
let time2pontos = (time2Partidas * 3) + empates;
console.log("Os " + partidas[0].time1 + " fizeram " + time1pontos + " pontos e os " + partidas[0].time2 + " fizeram " + time2pontos + " pontos.")

// questão 08 

time1gols = 0;
time2gols = 0;
partidas.forEach((item) => {
    time1gols += item.time1gols;
    time2gols += item.time2gols;
})
console.log("Os " + partidas[0].time1 + " fizeram " + time1gols + " gols e sofreram " + time2gols + " gols. Já os " + partidas[0].time2 + " fizeram " + time2gols + " gols e sofreram " + time1gols + " gols.")

// questão 09

let maisDeSeis = 0;
partidas.forEach((item) => {
    if (item.time1gols + item.time2gols > 6) {
        maisDeSeis++
    }
})
console.log("Foram feitos mais de seis gols em " + maisDeSeis + " partida(s).")

// questão 10 

let nope = 0; 
partidas.forEach((item) => {
    if (item.time1gols + item.time2gols === 0) {
        nope++
    } 
})

console.log("Não houve gol em " + nope + " partida(s).")