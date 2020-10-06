const gerarCódigo = require('../utils/code');
const response = require('./response');

const urls = [];

const obterUrl = (codigo) => {
    for (let i = 0; i < urls.length; i++) {
      if (urls[i][codigo]) {
        return urls[i][codigo];
      }
    }
  
    return null;
};

const shorter = (ctx) => {
    const url = ctx.request.body.url;
  
    if (!url) {
      response(ctx, 400, {mensagem: "Pedido mal-formatado!"});
      return;
    }
  
    const codigo = gerarCódigo();
    urls.push({ [codigo]: url });
    response(ctx, 201, {
        url_original: url,
        url_encurtada: `localhost:8081/encurta/${codigo}`,
    });
    
}

const redirect = (ctx) => {
    const codigo = ctx.params.id;
    const url = obterUrl(codigo);
    if (url) {
      ctx.status = 301;
      ctx.redirect(url);
    } else {
      response(ctx, 404, {
        mensagem: "Recurso não encontrado!",
        })
    }
}

module.exports = { shorter, redirect };