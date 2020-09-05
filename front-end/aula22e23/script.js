const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    
})

fetch("https://programming-quotes-api.herokuapp.com/quotes/random/lang/en")
    .then(resposta => resposta.json())
    .then(respostaJson =>  {
        quote.innerText = respostaJson.en;
        author.innerText = respostaJson.author;
    })