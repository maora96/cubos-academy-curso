
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const { COPYFILE_EXCL } = require('constants');

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
                    autores.splice(i, 1);
                    console.log(autores);
                }
            })
        } else {
            const url = ctx.url;
            let one = url.split("/");
            let id = one[2];
            autores.forEach(item => {
                if (item.id = id) {
                    item.primeiroNome = ctx.request.body.primeiroNome;
                    item.ultimoNome = ctx.request.body.ultimoNome;
                    item.email = ctx.request.body.email;
                    item.senha = ctx.request.body.senha;
                    ctx.body = item;
                }
            })
            console.log(autores);
        }
    } else if (ctx.url.includes("/posts")) {
        if (ctx.method === "POST") {
            if (!ctx.request.body.autor) {
                ctx.status = 400;
                ctx.body = {
                    status: "erro",
                    dados: {
                      mensagem: "Autor não escolhido!!",
                    },
                  };
            } else {
                autores.forEach(item => {
                    if (item.deletado === "false") {
                        let post = ctx.request.body;
                        posts.push(post);
                        ctx.body = post;
                    } else {
                        ctx.status = 400;
                        ctx.body = {
                            status: "erro",
                            dados: {
                            mensagem: "Autor não existe.",
                            },
                        };
                    }
                })
            }
        } else if (ctx.method === "GET") {
            const url = ctx.url;
            if (url === "/posts" || url === "/posts/") {
                let getPosts = [];
                posts.forEach(item => {
                    if (item.deletado === "false") {
                        getPosts.push(item);
                        ctx.body = getPosts; 
                    } 
                })
            } else if (url.includes("autor=")){
                let one = url.split("=");
                let id = one[1];
                console.log(id);
                let authorPosts = [];
                posts.forEach(item => {
                    if (item.autor === id) {
                        authorPosts.push(item);
                        ctx.body = authorPosts;
                    }
                })
            } else {
                let one = url.split("/");
                let id = one[2];
                posts.forEach(item => {
                    if (item.id === id && item.deletado === "false") {
                        ctx.body = item;
                    } else {
                        ctx.status = 400; // checar status dps
                        ctx.body = {
                            status: "erro",
                            dados: {
                                mensagem: "Post não existe ou foi deletado.",
                            },
                        };
                    }
                })
            }
        } else if (ctx.method === "DELETE") {
            const url = ctx.url;
            let one = url.split("/");
            let id = one[2];
            posts.forEach(item => {
                if (item.id === id) {
                    item.deletado = "true";
                    ctx.body = item;
                }
            })
        } else {
            const url = ctx.url;
            let one = url.split("/");
            let id = one[2];
            posts.forEach(item => {
                if (item.id = id) {
                    item.titulo = ctx.request.body.titulo;
                    item.autor = ctx.request.body.autor;
                    item.subtitulo = ctx.request.body.subtitulo;
                    item.publicado = ctx.request.body.publicado;
                    ctx.body = item;
                }
            })
        }
    }
})

server.listen(8081, () => console.log("Ouvindo porta 8081!"))