
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const server = new Koa(); 

server.use(bodyParser());

let autores = [];
let posts = [];

server.use(ctx => {
    if (ctx.url.includes("/autor")) {
        if (ctx.method === "POST") {
            if (!ctx.request.body.id) {
                ctx.status = 400;
                ctx.body = {
                    status: "erro",
                    dados: {
                      mensagem: "Pedido mal-formatado!",
                    },
                  };
            } else {
                let author = ctx.request.body; 
                autores.push(author);
                ctx.body = author;
            }
        } else if (ctx.method === "GET") {
            const url = ctx.url;
            let one = url.split("/");
            let id = one[2];
            autores.forEach(item => {
                if (item.id === id) {
                    ctx.body = item;
                }
            })
        } else if (ctx.method === "DELETE") {
            const url = ctx.url;
            let one = url.split("/");
            let id = one[2];
            posts.forEach((item, i) => {
                if (item.autor = id) {
                    ctx.status = 400; // checar status dps
                    ctx.body = {
                        status: "erro",
                        dados: {
                            mensagem: "Autor possui posts e por isso não pode ser deletado.",
                        },
                    };
                } else {
                    posts.splice(i, 1);
                    console.log(posts);
                }
            })
            autores.forEach(item => {
                if (item.id === id) {
                    
                }
            })
        } else {
            const url = ctx.url;
            let one = url.split("/");
            let id = one[2];
            autores.forEach(item => {
                if (item.id = id) {
                    item.primeiroNome = ctx.request.body.primeiroNome;
                    item.ultimomeNome = ctx.request.body.ultimoNome;
                    item.email = ctx.request.body.email;
                    item.senha = ctx.request.body.senha;
                    ctx.body = item;
                }
            })
            console.log(autores);
        }
    }
})

server.listen(8081, () => console.log("Ouvindo porta 8081!"))