// questão 01 

const imc = document.querySelector('#imc');
const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');


imc.addEventListener("click", () => {
    //alert(`Seu IMC é de ${imc}, o que é ${faixa}.`)
    let peso = inputPeso.valueAsNumber;
    let altura = inputAltura.valueAsNumber / 100; 
    let imc = peso / (altura * altura);
    let faixa;
    if (imc < 18.5) {
        faixa = 'abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        faixa = 'peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        faixa = 'sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        faixa = 'obesidade grau 1';
    } else if (imc >= 35 && imc <= 39.9) {
        faixa = 'obesidade grau 2';
    } else {
        faixa = 'obesidade grau 3';
    }
    alert(`Seu IMC é de ${Math.floor(imc)}, o que é ${faixa}.`);

})

// questão 02 


const churrasco = document.querySelector('#churrasco');
const inputAdultos = document.querySelector('#adultos');
const inputCriancas = document.querySelector('#criancas'); 
const inputGarrafas = document.querySelector('#garrafas');

churrasco.addEventListener("click", () => {
    let adultos = inputAdultos.valueAsNumber;
    let criancas = inputCriancas.valueAsNumber;
    let carnes = (criancas * 150) + (adultos * 300); 
    let coracao = (criancas * 50) + (adultos * 100); 
    let refrigerante = (criancas * 0.5) + (adultos * 1); 
    let cerveja = (adultos * 0.5); 
    //let garrafasQtd = (cerveja * 1000) / 600; casa questão 01
    let ml = 0;
    let tipoDeGarrafa = inputGarrafas.value; 
    if (tipoDeGarrafa === "garrafa") {
        ml = 600;
    } else if (tipoDeGarrafa === "latao") {
        ml = 475;
    } else if (tipoDeGarrafa === "longneck") {
        ml = 330;
    } else if (tipoDeGarrafa === "lata") {
        ml = 350;
    } else if (tipoDeGarrafa === "latinha") {
        ml = 269;
    }
    let garrafasQtd = (cerveja * 1000) / ml;
    garrafasQtd = garrafasQtd.toFixed(1);

    alert(`Serão necessários ${carnes}g de carne, ${coracao}g de coração, ${refrigerante}L de refrigerante e ${cerveja}L de cerveja, ou seja, ${garrafasQtd} unidades do tipo ${tipoDeGarrafa}.`)
})


// questão 03

const select = document.querySelector('select'); 
const email = document.querySelector('.email'); 
const telefone = document.querySelector('.telefone'); 
const mudar = document.querySelector('#mudar');

mudar.addEventListener("click", () => {
    if (select.value === "telefone") {
        email.setAttribute("hidden", true);
    } else {
        telefone.toggleAttribute("hidden");
        email.toggleAttribute("hidden");
    }
})

// questão 03 casa 

const seletorInput = document.querySelector('#seletor'); 
const seletorBtn = document.querySelector('#seletorbtn');

seletorBtn.addEventListener("click", () => {
    let all = document.querySelectorAll("*");
    for (let i = 0; i < all.length; i++) {
        all[i].classList.remove('red-border'); 
    }
    let tag = seletorInput.value
    let selected = document.querySelectorAll(tag);
    for (let i = 0; i < selected.length; i++) {
        selected[i].classList.toggle('red-border'); 
    }
     

})