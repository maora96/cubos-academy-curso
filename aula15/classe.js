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
const chalk = require('chalk');
const produtos = [
    {
        id: 1,
        nome: 'torta',
        qtd: 5, 
        preco: 5000
    },
    {
        id: 2,
        nome: 'cupcake',
        qtd: 10, 
        preco: 800
    },
    {
        id: 3,
        nome: 'brigadeiro',
        qtd: 20, 
        preco: 300
    },
    {
        id: 4,
        nome: 'casadinho',
        qtd: 20, 
        preco: 300
    },
    {
        id: 5,
        nome: 'brownie',
        qtd: 10, 
        preco: 400
    }
]

const procurarProduto = (resposta) => {
    let answer = resposta;
    let resultado = ''; 
    let produto = 0; 
    for (let i = 0; i < produtos.length; i++) {
        if (answer === produtos[i].nome) {
            resultado = `Yay! Temos ${chalk.green(answer)}!`;
            produto = i;
            break;
        } else {
            resultado = `Não temos ${chalk.red(answer)}!`;
        }
    }
    console.log(chalk.blue(resultado));
    if (resultado == `Não temos ${chalk.red(answer)}!`) {
        rl.question("Deseja procurar outro produto ou encerrar o atendimento?", (resposta) => {
            if (resposta === "outro produto") {
                rl.question("Qual produto está procurando?", (resposta) => {
                    procurarProduto(resposta);
                })
            } else {
                rl.close();
            }
            
        })
    } else {
        rl.question(`Quantos de ${resposta} pretende comprar? Temos ${chalk.blue(produtos[produto].qtd)} disponíveis.`, (resposta) => {
            if (resposta > produtos[produto].qtd) {
                rl.question(`Não temos essa quantidade. Temos ${produtos[produto].qtd} apenas. Quer comprar ${produtos[produto].qtd}?`, (resposta) => {
                    if (resposta === 'sim') {
                        let precoUnit = produtos[produto].preco / 100;
                        let precoTotal = precoUnit * produtos[produto].qtd; 
                        rl.question(`O preço unitário é R$${chalk.green(precoUnit)} e o preco total é R$${chalk.green(precoTotal)}. Deseja pagar agora ou procurar outro produto?`, (resposta) => {
                            if (resposta === 'sim') {
                                console.log("Obrigada pela preferência e volte sempre!")
                                rl.close();
                            } else if (resposta === 'outro produto') {
                                rl.question("Qual produto está procurando?", (resposta) => {
                                    procurarProduto(resposta);
                                })
                            } else {
                                console.log('Ok! Obrigada. Atendimento encerrado.')
                                rl.close();
                            }
                        })
                    } else {
                        console.log(chalk.bgRed('Ok! Obrigada. Atendimento encerrado.'))
                        rl.close();
                    }
                })
            } else {
                let precoUnit = produtos[produto].preco / 100;
                let precoTotal = precoUnit * resposta; 
                rl.question(`O preço unitário é R$${precoUnit} e o preco total é R$${precoTotal}. Deseja pagar agora?`, (resposta) => {
                    if (resposta === 'sim') {
                        console.log("Obrigada pela preferência e volte sempre!")
                        rl.close();
                    } else {
                        console.log('Ok! Obrigada. Atendimento encerrado.')
                        rl.close();
                    }
                })
            }
        })
    }
}

// adicionar chalk na reposta depois
rl.question("Qual produto está procurando?", (resposta) => {
    procurarProduto(resposta);
})

