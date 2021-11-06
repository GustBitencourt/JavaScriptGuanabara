let area = document.getElementById("area");
area.addEventListener("click", clickar);
area.addEventListener("mouseenter", entrar);
area.addEventListener("mouseout", sair);

function clickar () {
    area.innerText = "Clicked";
    area.style.background = "red"
}

function entrar () {
    area.innerText = "Entrou";
}

function sair () {
    area.innerText = "Saiu";
    area.style.background = "coral"
}