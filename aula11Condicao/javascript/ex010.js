
function calcular() {
    let velocidadeValor = document.querySelector("input#velocidade");
    let radar = document.getElementById("radar");

    let velocidadeKm = Number(velocidadeValor.value);

    radar.innerHTML = `<p> Velocidade atual é de <strong>${velocidadeKm}</strong> Km/h </p>`;

    if(velocidadeKm > 60) {
        radar.innerHTML += `<p>Você está acima do limite, será <strong>MULTADO</strong></p> `;
    }

}