// questão 01 e 02

function gerarNumeroInteiroAleatorio(min, max) {
	// número fracionário aleatório maior ou igual a 0 e menor que 1
	const aleatorioDeBase = Math.random();
	// número fracionário aleatório maior ou igual a 0 e menor que (max - min + 1)
	const aleatorioFracionario = Math.random() * (max - min + 1);
	// número inteiro aleatório maior ou igual a 0 e menor ou igual a (max - min)
	// Math.trunc tira a parte fracionária de um número: 0,5 vira 0, 1,25 vira 1, etc
	const aleatorioInteiro = Math.trunc(aleatorioFracionario);
	// número inteiro aleatório maior ou igual a min e menor ou igual a max
	return min + aleatorioInteiro;
}

function gerarCorAleatoria() {
	const vermelho = gerarNumeroInteiroAleatorio(0, 255);
	const verde = gerarNumeroInteiroAleatorio(0, 255);
	const azul = gerarNumeroInteiroAleatorio(0, 255);
	
	return "rgb(" + vermelho + ", " + verde + ", " + azul + ")";
}

function escolherElementoAleatorio(array) {
	return array[gerarNumeroInteiroAleatorio(0, array.length - 1)]
}

const buttons = document.querySelectorAll("button");

const square = document.querySelector(".color");

function start() {
	let colors = [];
	let one = gerarCorAleatoria();
	let two = gerarCorAleatoria();
	let three = gerarCorAleatoria();
	colors.push(one, two, three);
	square.style["background-color"] = escolherElementoAleatorio(colors)
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].innerText = colors[i];
	}
}

start();

let acertos = 0;

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", () => {
		if (square.style["background-color"] == buttons[i].innerText) {
			alert("Você acertou!")
			acertos++
			if (acertos == 10) {
				alert("Parabéns, você acertou dez vezes consecutivas!")
			}
		} else {
			alert("Opção errada!")
		}
		start();
	})
}

// questão 03 e 04