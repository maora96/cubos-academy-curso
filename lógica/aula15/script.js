const texto = document.querySelector("span");
const img = document.querySelector("img");
const button = document.querySelector("button");
const body = document.querySelector("body");


let contagem = 10;
let isLauching = false;


const launchRocket = () => {
    texto.innerHTML = "Lançamento iniciado!";
    img.setAttribute("src", "https://i.pinimg.com/originals/2b/a6/95/2ba695fd5ecada4d9b337b35e3b7ffbe.gif");
    body.style["background-color"] = "#3e4370";
}


button.addEventListener("click", ()=> {
    if (isLauching === false) {
        console.log("hello");
        id = setInterval(()=>{
            texto.innerHTML = contagem;
            contagem--
            button.innerText = "Abortar a missão";
            if (contagem === -1) {
                clearInterval(id);
                launchRocket();
            }
        }, 1000);
        isLauching = true;
    } else {
        clearInterval(id);
        button.innerText = "Iniciar contagem regressiva!";
        texto.innerText = "Missão abortada!";
        contagem = 10;
        isLauching = false;
    }
    
})