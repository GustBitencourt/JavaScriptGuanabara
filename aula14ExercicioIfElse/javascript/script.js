function contar() {
    let inicio = document.getElementById("inicio");
    let fim = document.getElementById("fim");
    let passo = document.getElementById("passo");
    let resultado = document.getElementById("resultado");

    //validação
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("Insira os dados corretamente!");
    } else {
        resultado.innerHTML = "Contando..."
        let comeco = Number(inicio.value);
        let final = Number(fim.value);
        let passoPasso = Number(passo.value);

        if(passoPasso <= 0) {
            alert("Passo inválido, considerando 1");
            passoPasso = 1;
        }

        //IF contador positivo | ELSE contador negativo
        if (comeco < final) {            
            for (i = comeco; i <= final; i += passoPasso) {
                resultado.innerHTML += `${i} 👉`;
            }
        } else {
            for(i = comeco; i >= final; i -= passoPasso) {
                resultado.innerHTML += `${i} 👉`;
            }            
        }
        resultado.innerHTML += `🏁`;
        
    }


}