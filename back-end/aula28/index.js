const Koa = require("koa");
const bodyparser = require("koa-bodyparser");

const server = new Koa();

server.use(bodyparser());

const formatarSucesso = (ctx, dados, status = 200) => {
  ctx.status = status;
  ctx.body = {
    status: "sucesso",
    dados: dados,
  };
};

const formatarErro = (ctx, mensagem, status = 404) => {
  ctx.status = status;
  ctx.body = {
    status: "erro",
    dados: {
      mensagem: mensagem,
    },
  };
};

const autor = {
  id: 1,
  nome: "Nícolas",
  sobrenome: "Deçordi",
  email: "nicolas.decordi@cubos.io",
  senha: "102030",
  deletado: false,
};

const post = {
  id: 1,
  titulo: "Como se tornar uma dev Back-end",
  subtitulo: "Os passos listados...",
  conteudo: "Os passos para se tornar uma dev Back-end são 3...",
  autor: 1,
  publicado: false,
  deletado: false,
};

const autores = [];
autores.push(autor);

const posts = [];
posts.push(post);

const obterAutores = () => {
  return autores.filter((autor) => !autor.deletado);
};

const adicionarAutor = (ctx) => {
  const body = ctx.request.body;

  if (!body.nome || !body.sobrenome || !body.email || !body.senha) {
    formatarErro(ctx, "Pedido mal-formatado", 400);
    return;
  }

  const autor = {
    id: autores.length + 1,
    nome: body.nome,
    sobrenome: body.sobrenome,
    email: body.email,
    senha: body.senha,
    deletado: false,
  };

  autores.push(autor);

  return autor;
};

const atualizarAutor = (ctx) => {
  const id = ctx.url.split("/")[2];
  const body = ctx.request.body;

  if (!body.nome && !body.sobrenome && !body.email && !body.senha) {
    formatarErro(ctx, "Pedido mal-formatado", 400);
    return;
  }

  if (id) {
    const autorAtual = autores[id - 1];
    if (autorAtual) {
      const autorAtualizado = {
        id: Number(id),
        nome: body.nome ? body.nome : autorAtual.nome,
        sobrenome: body.sobrenome ? body.sobrenome : autorAtual.sobrenome,
        email: body.email ? body.email : autorAtual.email,
        senha: body.senha ? body.senha : autorAtual.senha,
        deletado: autorAtual.deletado,
      };

      autores[id - 1] = autorAtualizado;

      return autorAtualizado;
    }
  } else {
    formatarErro(ctx, "Autor não encontrado", 404);
  }
};

const obterPostsDeAutor = (autorId) => {
  const postsDoAutor = posts.filter((post) => {
    return post.autor == autorId && post.deletado === false;
  });

  console.log(postsDoAutor);
  return postsDoAutor;
};

const deletarAutor = (ctx) => {
  const id = ctx.url.split("/")[2];
  const body = ctx.request.body;

  if (typeof body.estado !== "boolean") {
    formatarErro(ctx, "Pedido mal-formatado", 400);
    return;
  }

  if (id) {
    const autorAtual = autores[id - 1];
    if (autorAtual) {
      if (body.estado === true && obterPostsDeAutor(id).length > 0) {
        formatarErro(ctx, "Ação proibida", 403);
        return;
      }

      const autorAtualizado = {
        id: autorAtual.id,
        nome: autorAtual.nome,
        sobrenome: autorAtual.sobrenome,
        email: autorAtual.email,
        senha: autorAtual.senha,
        deletado: body.estado,
      };

      autores[id - 1] = autorAtualizado;

      return autorAtualizado;
    }
  } else {
    formatarErro(ctx, "Usuário não encontrado", 404);
  }
};

const obterPosts = (ctx, path) => {
  return posts.filter((post) => !post.deletado && !post.publicado);
};

const adicionarPost = (ctx) => {
  const body = ctx.request.body;

  if (!body.titulo || !body.conteudo || !body.subtitulo || !body.autor) {
    formatarErro(ctx, "Pedido mal-formatado", 400);
    return;
  } else if (autores[body.autor - 1].deletado === true) {
    formatarErro(ctx, "Pedido proibido", 403);
    return;
  }

  const post = {
    id: posts.length + 1,
    titulo: body.titulo,
    conteudo: body.conteudo,
    subtitulo: body.subtitulo,
    autor: body.autor,
    publicado: false,
    deletado: false,
  };

  posts.unshift(post);

  return post;
};

const atualizarPost = (ctx) => {
  const id = ctx.url.split("/")[2];
  const body = ctx.request.body;

  if (
    (!body.conteudo && !body.titulo && !body.subtitulo) ||
    typeof body.publicado !== "boolean"
  ) {
    formatarErro(ctx, "Pedido mal-formatado", 400);
    return;
  }

  if (id) {
    const postAtual = posts[id - 1];
    if (postAtual) {
      const postAtualizado = {
        id: Number(id),
        conteudo: body.conteudo ? body.conteudo : postAtual.conteudo,
        titulo: body.titulo ? body.titulo : postAtual.titulo,
        subtitulo: body.subtitulo ? body.subtitulo : postAtual.subtitulo,
        senha: body.senha ? body.senha : postAtual.senha,
        autor: postAtual.autor,
        publicado: !!body.publicado,
        deletado: postAtual.deletado,
      };

      posts[id - 1] = postAtualizado;

      return postAtualizado;
    }
  } else {
    formatarErro(ctx, "Autor não encontrado", 404);
  }
};

const deletarPost = (ctx) => {
  const id = ctx.url.split("/")[2];
  const body = ctx.request.body;

  if (typeof body.estado !== "boolean") {
    formatarErro(ctx, "Pedido mal-formatado", 400);
    return;
  }

  if (id) {
    const postAtual = posts[id - 1];
    if (postAtual) {
      const postAtualizado = {
        id: postAtual.id,
        titulo: postAtual.titulo,
        subtitulo: postAtual.subtitulo,
        conteudo: postAtual.conteudo,
        autor: postAtual.autor,
        publicado: postAtual.publicado,
        deletado: body.estado,
      };

      posts[id - 1] = postAtualizado;

      return postAtualizado;
    }
  } else {
    formatarErro(ctx, "Post não encontrado", 404);
  }
};

const rotasAutores = (ctx, path) => {
  switch (ctx.method) {
    case "GET":
      const id = path[2];
      if (id) {
        const autorAtual = autores[id - 1];
        if (autorAtual) {
          formatarSucesso(ctx, autorAtual);
        } else {
          formatarErro(ctx, "Autor não encontrado", 404);
        }
      } else {
        const autores = obterAutores();
        formatarSucesso(ctx, autores);
      }
      break;
    case "POST":
      const autor = adicionarAutor(ctx);

      if (autor) {
        formatarSucesso(ctx, autor, 201);
      }
      break;
    case "PUT":
      const autorAtualizado = atualizarAutor(ctx);

      if (autorAtualizado) {
        formatarSucesso(ctx, autorAtualizado, 200);
      }
      break;
    case "DELETE":
      const autorDeletado = deletarAutor(ctx);
      if (autorDeletado) {
        formatarSucesso(ctx, autorDeletado, 200);
      }
      break;
    default:
      formatarErro(ctx, "Método não permitido", 405);
      break;
  }
};

const rotasPosts = (ctx, path) => {
  switch (ctx.method) {
    case "GET":
      const id = path[2];
      if (id) {
        const postAtual = posts[id - 1];
        if (postAtual) {
          formatarSucesso(ctx, postAtual);
        } else {
          formatarErro(ctx, "Post não encontrado", 404);
        }
      } else {
        const post = obterPosts();
        formatarSucesso(ctx, post);
      }
      break;
    case "POST":
      const post = adicionarPost(ctx);

      if (post) {
        formatarSucesso(ctx, post, 201);
      }
      break;
    case "PUT":
      const postAtualizado = atualizarPost(ctx);

      if (postAtualizado) {
        formatarSucesso(ctx, postAtualizado, 200);
      }
      break;
    case "DELETE":
      const postDeletado = deletarPost(ctx);
      if (postDeletado) {
        formatarSucesso(ctx, postDeletado, 200);
      }
      break;
    default:
      formatarErro(ctx, "Método não permitido", 405);
      break;
  }
};

const rotas = (ctx) => {
  const path = ctx.url.split("/"); // ["", "autor / post", "1"];

  if (path[1] === "autor") {
    rotasAutores(ctx, path);
  } else if (path[1] === "posts") {
    rotasPosts(ctx, path);
  } else {
    formatarErro(ctx, "Conteúdo não encontrado", 404);
  }
};

server.use((ctx) => {
  rotas(ctx);
});

server.listen(8081, () => console.log("Servidor rodando..."));
