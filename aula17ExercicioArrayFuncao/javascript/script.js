let inputNumero = document.getElementById("numero");
let select = document.getElementById("selectLista");
let divResult = document.getElementById("resultado");
let valores = [];

//verifica se o número é válido
function numeroValor(num) {
    if(Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }
}

function estaNaLista(num, list) {
    //verificando se o numero está presenta na lista
    if(list.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (numeroValor(inputNumero.value) && !estaNaLista(inputNumero.value, valores)) {
        valores.push(Number(inputNumero.value)) //adiciona numero ao array de valores
        let option = document.createElement('option');
        option.text = `Valor ${inputNumero.value} adicionado`;
        select.appendChild(option);
        divResult.innerHTML = '';
    } else {
        alert("Valor inválido ou já está presente na lista!");
    }

    inputNumero.value = "";
    inputNumero.focus();
}

function resumo() {
    if(valores.length == 0) {
        alert('A lista de valores está vazia');
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        //a posição/itens no array de valores
        for(pos in valores) {
            soma += valores[pos]; //soma os valores na iteração
            if (valores[pos] > maior){
                maior = valores[pos];
            }
            if (valores[pos] < menor){
                menor = valores[pos];
            }
        }
        media = soma / total;

        divResult.innerHTML = ``;
        divResult.innerHTML += `<p>Temos ${total} números na lista</p>`;
        divResult.innerHTML += `<p>O maior valor é ${maior}</p>`;
        divResult.innerHTML += `<p>O menor valor é ${menor}</p>`;
        divResult.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`;
        divResult.innerHTML += `<p>A média dos valores é ${media.toFixed(2)}</p>`;
    }
}