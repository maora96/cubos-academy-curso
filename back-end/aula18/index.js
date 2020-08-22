const fs = require("fs");

let newData = [];

fs.readFile("cartas.txt", (err, data) => {
    let mensagens = null; 
    mensagens = data.toString();
    mensagens = mensagens.split("---")
    for (let i = 0; i < mensagens.length; i++) {
        let mensagem = mensagens[i].trim("\n").split("\n");
        mensagem.unshift("[INICIO DA MENSAGEM]");
        mensagem.push("[FIM DA MENSAGEM]"); 
        for (let i = 0; i < mensagem.length; i++) {
            if (i == 1) {
                mensagem[i] = "Remetente: " + mensagem[i];
            } else if (i == 2) {
                mensagem[i] = "Destinatário: " + mensagem[i];
            } else if (i == 3) {
                mensagem[i] = "Mensagem: " + mensagem[i];
            }
        }
        let newMensagem = mensagem.join("\n");
        newData += newMensagem + "\n";
    }

    fs.writeFile('cartas.txt', newData, (err) =>{
        if (err) throw err; 
    })
}) 

let ruas = [];
let msgs;
let linhas = [];
fs.readFile("cartas.txt", (err, data) => {
    msgs = data.toString().split("[FIM DA MENSAGEM]");
    for (let i = 0; i < msgs.length; i++) {
        let nova = msgs[i].split("\n");
        for (let x = 0; x < nova.length; x++) {
            if (nova[x] == "") {
                nova.splice(x, 1);
            }
        }
        linhas.push(nova);
        //console.log(nova);
    }
    linhas.pop();
    //console.log(msgs);

})

let arquivo = [];
fs.readFile("enderecos.txt", (err, data) => {
    let enderecos = null; 
    enderecos = data.toString();
    enderecos = enderecos.split("---")
    for (let i = 0; i < enderecos.length; i++) {
        let endereco = enderecos[i].split("\r\n");
        for (let i = 0; i < endereco.length; i++) {
            if (endereco[i] === "") {
                endereco.splice(i, 1);
            }
        }
        ruas.push(endereco);
    }
    

    for (let i = 0; i < ruas.length; i++) {
        ruas[i][0] = "Destinatário: " + ruas[i][0];

    }


    for (let i = 0; i < linhas.length; i++) {
        linhas[i].splice(linhas[i].length, 0, "[FIM DA QUESTÃO]");
        for (let x = 0; x < ruas.length; x++) {
            if (linhas[i].includes(ruas[x][0])) {
                let endereco = "Endereço: " + ruas[x][1];
                linhas[i].splice(3, 0, endereco);
        
            }
        }
        let newLinhas = linhas[i].join("\n");;
        arquivo += newLinhas + "\n";
        fs.writeFile('arquivo.txt', arquivo, (err) =>{
            if (err) throw err; 
        })

    }
    console.log(arquivo);
})

