function tabuada() {
    let numero = document.getElementById("number");
    let selectTabuada = document.getElementById("selectTabuada");

    //validando
    if(numero.value.lenght == 0) {
        alert("Digite um numero");
    } else {
        let numeroValor = Number(numero.value);
        let i = 1;
        selectTabuada.innerHTML = " ";
        while(i <= 10) {
            //criando option pro select
            let item = document.createElement("option");
            //editando o option
            item.text = `${numeroValor} * ${i} = ${numeroValor * i}`;
            //adicionando value aos options criados
            item.value = `tab${i}`;
            selectTabuada.appendChild(item);
            i++;
        }
    }
}