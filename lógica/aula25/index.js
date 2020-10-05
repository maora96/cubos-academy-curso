const fs = require('fs');

const tabela = [];

const ordernarAlfebeticamente = () => {
    tabela.sort((a, b) => {
        return a.nome.localeCompare(b.nome);
    })
}

const ordernarPorEmpates = () => {
    tabela.sort((a,b) => {
        return b.empates - a.empates;
    })
}

const ordernarPorMenosGols = () => {
    tabela.sort((a,b) => {
        if (a.golsFeitos < b.golsFeitos) {
            return -1;
        } else if (b.golsFeitos < a.golsFeitos) {
            return 1;
        } else {
            return 0;
        }
    })
}

const ordernarPorMaisGolsSofridos = () => {
    tabela.sort((a, b) => {
        if (a.golsSofridos > b.golsSofridos) {
            return -1;
        } else if (b.golsSofridos > a.golsSofridos) {
            return 1;
        } else {
            return 0;
        }
    })
}

const ordenarTabela = () => {
    tabela.sort((a, b) => {
        if (a.pontos > b.pontos) {
            return -1;
        } else if (b.pontos > a.pontos) {
            return 1;
        } else {
            if (a.vitorias > b.vitorias) {
                return -1;
            } else if (b.vitorias > a.vitorias) {
                return 1;
            } else {
                const saldoA = a.golsFeitos - a.golsSofridos;
                const saldoB = b.golsFeitos - b.golsSofridos;
                if (saldoA > saldoB) {
                    return -1;
                } else if (saldoB > saldoA) {
                    return 1;
                } else {
                    if (a.golsFeitos > b.golsFeitos) {
                        return -1;
                    } else if (b.golsFeitos > a.golsFeitos) {
                        return 1;
                    } else {
                        return a.nome.localeCompare(b.nome);
                    }
                }
            }
        }
    })
}

const inserirOuAtualizarTime = (nome, pontos, golsFeitos, golsSofridos) => {
    const timeEncontrado = tabela.find(time => time.nome == nome);

    if (timeEncontrado) {
        timeEncontrado.pontos += pontos;
        timeEncontrado.jogos++;
        timeEncontrado.vitorias += (pontos === 3 ? 1 : 0);
        timeEncontrado.derrotas += (pontos === 0 ? 1 : 0);
        timeEncontrado.empates += (pontos === 1 ? 1 : 0);
        timeEncontrado.golsFeitos += golsFeitos;
        timeEncontrado.golsSofridos += golsSofridos;
    } else {
        tabela.push(
            {
                nome, 
                pontos, 
                jogos: 1, 
                vitorias: pontos === 3 ? 1 : 0,
                derrotas: pontos === 0 ? 1 : 0, 
                empates: pontos === 1 ? 1 : 0,
                golsFeitos, 
                golsSofridos
            }
        )
    }
};

const arrumarTabela = (jogos) => {
    for (jogo of jogos) {
        if (jogo.goals1 > jogo.gols2) {
            //t1 ganhou
            inserirOuAtualizarTime(jogo.time1, 3, jogo.gols1, jogo.gols2);
            inserirOuAtualizarTime(jogo.time2, 0, jogo.gols2, jogo.gols1);
        } else if (jogo.gols1 < jogo.gols2) {
            //t2 ganhou
            inserirOuAtualizarTime(jogo.time1, 0, jogo.gols1, jogo.gols2);
            inserirOuAtualizarTime(jogo.time2, 3, jogo.gols2, jogo.gols1);
        } else {
            //empate
            inserirOuAtualizarTime(jogo.time1, 1, jogo.gols1, jogo.gols2);
            inserirOuAtualizarTime(jogo.time2, 1, jogo.gols2, jogo.gols1);
        }
    }
}

fs.readFile('brasileirao.txt', (err, data) => {
    const linhas = data.toString().split('\n');

    const jogos = linhas.map(linha => {
        const jogo = linha.split('\t');

        return {
            time1: jogo[0],
            gols1: parseInt(jogo[1]),
            time2: jogo[4],
            gols2: parseInt(jogo[3])
        }
    })

    arrumarTabela(jogos);
    ordenarTabela();
    ordernarPorMenosGols()
    console.log(tabela);
})