const bancos = [
    {
        id: "001",
        banco: "Banco do Brasil S.A."
    },
    {
        id: "033",
        banco: "Banco Santander (Brasil) S.A."
    },
    {
        id: "104",
        banco: "Caixa Econômica Federal"
    },
    {
        id: "237",
        banco: "Banco Bradesco S.A."
    },
    {
        id: "341",
        banco: "Banco Itaú S.A."
    },
    {
        id: "356",
        banco: "Banco Real S.A. (antigo)"
    },
    {
        id: "389",
        banco: "Banco Mercantil do Brasil S.A."
    },
    {
        id: "399",
        banco: "HSBC Bank Brasil S.A."
    },
    {
        id: "422",
        banco: "Banco Safra S.A."
    },
    {
        id: "453",
        banco: "Banco Rural S.A."
    },
    {
        id: "633",
        banco: "Banco Rendimento S.A."
    },
    {
        id: "652",
        banco: "Itaú Unibanco Holding S.A."
    },
    {
        id: "745",
        banco: "Banco Citibank S.A."
    }
]

// questão 01 

const nomeBancos = (id) => {
    let result = "";
    for (let i = 0; i < bancos.length; i++) {
        if (bancos[i].id === id) {
            result = bancos[i].banco; 
        }
    }
    result = result.replace("S.A.", "").replace("(Brasil)", "").replace("Holding", "").trim();
    console.log(result);
    return result;
}


// questão 02 

const removaNaN = (num) => {
    for (let i = 0; i < num.length; i++) {
        if (num[i] === "." || num[i] === "-") {
            num = num.replace(num[i], "")
        }
    }
    return num;
}

// questão 03 

const formatarCPF = (cpf) => {
    let one = "";
    let two = "";
    let three = "";
    let four = "";
    let newCPF = "";
    if (cpf.length === 11) {
        one = cpf.slice(0, 3);
        two = cpf.slice(3, 6);
        three = cpf.slice(6, 9);
        four = cpf.slice(9, 11);
        newCPF = one + "." + two + "." + three + "-" + four;
        
    } else {
        console.log("CPF inválido.")
    }
    console.log(newCPF);
    return newCPF;
}


// questão 04 

const formatarAgencia = (agencia) => {
    let one = "";
    let two = "";
    let newAgencia = "";
    if (agencia.length === 5) {
        one = agencia.slice(0, 4);
        two = agencia.slice(4);
        newAgencia = one + "-" + two;
    } else {
        console.log("Agência inválida.")
    }
    return newAgencia;
}

// questão 05 

const formatarConta = (conta) => {
    let one = "";
    let two = "";
    let newConta = "";
    if (conta.length === 7) {
        one = conta.slice(0, 6);
        two = conta.slice(6);
        newConta = one + "-" + two;
    } else {
        console.log("Conta inválida.")
    }
    return newConta;
}


module.exports = {
    nomeBancos: nomeBancos,
    removaNaN: removaNaN,
    formatarCPF: formatarCPF,
    formatarAgencia: formatarAgencia,
    formatarConta: formatarConta
}