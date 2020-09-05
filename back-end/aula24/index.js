const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const server = new Koa();

server.use(bodyparser());

const urls = [];


const obterUrl = (codigo) => {
  for (let i = 0; i < urls.length; i++) {
    if (urls[i][codigo]) {
      return urls[i][codigo];
    }
  }

  return null;
};

const gerarCódigo = () => Math.random().toString(36).substr(2, 9);

server.use((ctx) => {
  if (ctx.url.includes("/encurta")) {
    if (ctx.method === "POST") {
      const url = ctx.request.body.url;

      if (!url) {
        ctx.status = 400;
        ctx.body = {
          status: "erro",
          dados: {
            mensagem: "Pedido mal-formatado!",
          },
        };
        return;
      }

      const codigo = gerarCódigo();
      urls.push({ [codigo]: url });
      ctx.status = 201;
      ctx.body = {
        status: "sucesso",
        dados: {
          url_original: url,
          url_encurtada: `localhost:8081/encurta/${codigo}`,
        },
      };
    } else if (ctx.method === "GET") {
      const codigo = ctx.url.split("/")[2];
      const url = obterUrl(codigo);

      if (url) {
        ctx.status = 301;
        ctx.redirect(url);
      } else {
        ctx.status = 404;
        ctx.body = {
          status: "erro",
          dados: {
            mensagem: "Recurso não encontrado!",
          },
        };
      }
    }
  } else {
    ctx.status = 404;
    ctx.body = {
      status: "erro",
      dados: {
        mensagem: "Recurso não encontrado!",
      },
    };
  }
});

server.listen(8081, () => console.log("Ouvindo porta 8081!"));