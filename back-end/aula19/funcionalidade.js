const suporte = require("./suporte");
const { formatarAgencia, formatarConta } = require("./suporte");

// questão 01

let correntistas = [
    {
        nome: "Jane Doe", 
        cpf: "000.000.000-00",
        banco: "000",
        agencia: "0000-0",
        conta: "000000-0",
        saldo: 1000000
    }
]

// questão 02

const acharCorrentista = (cpf) => {
    for (let i = 0; i < correntistas.length; i++) {
        if (correntistas[i].cpf === cpf) {
            console.log(correntistas[i]);
            return correntistas[i];
        } else {
            console.log("Não existe CPF cadastrado");
        }
    }
}

//acharCorrentista("000.000.020-00")

// questão 03

const adicionarCorrentista = (nome, cpf, banco, agencia, conta, saldo) => {

    for (let i = 0; i < correntistas.length; i++) {
        if (cpf === correntistas[i].cpf) {
            console.log("CPF já sendo utilizado por outra conta");
        } else {
            agencia = suporte.formatarAgencia(agencia);
            conta = suporte.formatarConta(conta);
            cpf = suporte.removaNaN(cpf);
            correntistas.push(
                {
                    nome: nome, 
                    cpf: cpf,
                    banco: banco,
                    agencia: agencia,
                    conta: conta,
                    saldo: 1000000
                }
            )
        }
    }
}

adicionarCorrentista("John Doe", "190.012.840-35", "237", "11111", "2222222", 300000)


// CASA

// questão 04 

const atualizarCorrentista = (cpf, propriedade, valor) => {
    for (let i = 0; i < correntistas.length; i++) {
        if (correntistas[i].cpf === cpf) {
            if (propriedade === "banco") {
                console.log("Não é possível atualizar o banco.")
            } else if (propriedade === "saldo") {
                console.log("Não é possível atualizar o saldo, espertinho.")
            } else if (propriedade === "nome") {
                correntistas[i].nome = valor;
            } else if (propriedade === "cpf") {
                correntistas[i].cpf = valor;
            } else if (propriedade === "conta") {
                correntistas[i].conta = valor;
            } else if (propriedade === "agencia") {
                correntistas[i].agencia = valor;
            }
        } else {
            console.log("CPF não cadastrado.")
        }
    }
}

atualizarCorrentista("000.000.000-00", "nome", "Joyce Doe")

// questão 05 

const removerCorrentista = (cpf) => {
    for (let i = 0; i < correntistas.length; i++) {
        if (cpf === correntistas[i].cpf) {
            correntistas.splice(i, 1);
        }
    }
}

//removerCorrentista("000.000.000-00");

// questão 06

const adicionarSaldo = (cpf, valor) => {
    for (let i = 0; i < correntistas.length; i++) {
        if (cpf === correntistas[i].cpf) {
            valor = valor * 100;
            correntistas[i].saldo += valor;
        }
    }
}

adicionarSaldo("19001284035", 200);

// questão 07 

const transferenciaMesmoBanco = (cpfDebito, cpfCredito, valor) => {
    valor = valor * 100;
    for (let i = 0; i < correntistas.length; i++) {
        if (cpfDebito === correntistas[i].cpf) {
            if (correntistas[i].saldo < valor) {
                console.log("Não há saldo o suficiente na conta de débito.")
            } else {
                correntistas[i].saldo -= valor; 
                for (let x = 0; x < correntistas.length; x++) {
                    if (correntistas[x].cpf === cpfCredito) {
                        correntistas[x].saldo += valor;
                    }
                }
            }
        } 
    }
}

transferenciaMesmoBanco("000.000.000-00", "19001284035", 200)