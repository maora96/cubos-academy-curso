const fs = require('fs');

const tabela = [];

const inserirOuAtualizarTime(nome, pontos, golsFeitos, golsSofridos) => {

};

const arrumarTabela = (jogos) => {
    for (jogo of jogos) {
        if (jogo.goals1 > jogo.gols2) {
            //t1 ganhou
            inserirOuAtualizarTime(jogo.time1, 3, jogo.gols1, jogo.gols2)
        } else if (jogo.gols1 < jogo.gols2) {
            //t2 ganhou
        } else {
            //empate
        }
    }
}

fs.readFile('brasileirao.txt', (err, data) => {
    const linhas = data.toString().split('\n');

    const jogos = linhas.map(linha => {
        const jogo = linha.split('\t');

        return {
            time1: jogo[0],
            gols1: jogo[1],
            time2: jogo[4],
            gols2: jogo[3]
        }
    })

    console.log(jogos);
})