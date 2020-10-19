const livros = [
	{
		id: '1',
		titulo: 'Senhor dos Aneis, Volume I',
		autor: 'Tolkien',
		deletado: false,
	},
	{
		id: '2',
		titulo: 'Mistborn - Nascidos da Bruma',
		autor: 'Brandon Sanderson',
		deletado: false,
	},
	{
		id: '3',
		titulo: 'Arquivos de Dresden - Frente de Tormenta',
		autor: 'Jim Butcher',
		deletado: false,
	},
	{
		id: '4',
		titulo: 'Arquivos de Dresden - Lua Cheia',
		autor: 'Jim Butcher',
		deletado: false,
	},
];

const obterLivros = (ctx) => {
	const { autor = null, deletado = false } = ctx.query;

	const estado = deletado === 'true';

	if (!autor) {
		ctx.body = livros.filter((livro) => livro.deletado === estado);
		return;
	}

	ctx.body = livros.filter(
		(livro) => livro.deletado === estado && livro.autor === autor
	);
};

const obterLivro = (ctx) => {
	const { id = null } = ctx.params;

	if (!id) {
		ctx.status = 400;
		ctx.body = { mensagem: 'Pedido mal formatado' };
	}

	const livro = livros.find((item) => item.id === id);

	if (livro) {
		ctx.body = { livro };
		return;
	}

	ctx.status = 404;
	ctx.body = { livro: null };
};

module.exports = { obterLivros, obterLivro };
