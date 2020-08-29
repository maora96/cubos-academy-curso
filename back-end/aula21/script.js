// questão 01.a
const maioridade = (idade) => {
    return (idade >= 18) ? true : false; 
};
console.log(maioridade(18));

// questão 01.b
const escolherHeroina = (grupo) => {
    let heroina = (grupo === 'marvel') ? 'Capitã Marvel' : 'Mulher Maravilha'; 
    return heroina;
}
console.log(escolherHeroina('marvel'))

// questão 01.c 
const calcularIdade = (animal, idade) => {

    if (animal === 'gato') {
        return (idade <=1) ? 15 : (idade > 1 && idade <=2) ? 15 + 10 : (15 + 10 + ((idade - 2) * 4)) 
    } else if (animal === 'cachorro') {
        return (idade <=1) ? 15 : (15 + ((idade - 1) * 7));
    } else {
        return idade;
    }
}

console.log(calcularIdade('gato', 3));
console.log(calcularIdade('cachorro', 2));

// questão 02 

const caraOuCoroa = () => {
    return Math.floor(Math.random() * 100) <= 50 ? "cara" : "coroa";
}


const Koa = require('koa');
const server = new Koa();

server.use(async ctx => {
    ctx.body = "Hey! Esta é a aula 21!";

    // questão 03.a
    if (ctx.originalUrl === '/cara_ou_coroa') {
        ctx.body = `${caraOuCoroa()}`;
    }

    // questão 03.b
    let numero = 2;
    if (ctx.originalUrl === `/raiz_quadrada/${numero}`) {
        ctx.body = `A raiz quadrada de ${numero} é ${Math.pow(numero, 2)} `;
    }

    // questão 03.c
    let numero_2 = 1;
    if (ctx.originalUrl === `/${numero}/${numero_2}`) {
        ctx.body = `A divisão de ${numero} por ${numero_2} é ${numero / numero_2}`;
    } else if (ctx.originalUrl === "/divisao/") {
        ctx.body = 'Você precisa passar dois números na requisição!'
    }
})

server.listen(8081, () => {
    console.log("hello");
})



