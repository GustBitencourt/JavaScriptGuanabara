let nacionalidadeValor = document.getElementById("nacionalidade");
let resposta = document.getElementById("resposta");

function verificar() {
    
    if(nacionalidadeValor.value == "brasileiro") {
        resposta.innerHTML = "<p>Você é do Brasil!</p>";
    } else {
        resposta.innerHTML = "<p>Você é estrangeiro</p>";
    }
}








/*
let nacionalidade = "brasileiro";

if(nacionalidade == "brasileiro") {
    console.log(`Você é do Brasil!`);
} else {
    console.log(`Você é estrangeiro!`)
} */