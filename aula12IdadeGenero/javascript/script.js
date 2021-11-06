function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let userAno = document.getElementById("anoNasc");
    let resultado = document.querySelector("div#resultado");

    if (userAno.value.lenght == 0 || userAno.value > ano) {
        alert("Dados inválidos");
    } else {
        let fsex = document.getElementsByName('genero');
        let idade = ano - Number(userAno.value);
        let gen = '';
        //criando imagem
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');

            //checando radio masculino
        if (fsex[0].checked) {
            gen = "Homem";
            if(idade >= 0 && idade <= 10) {
                //kid
                img.setAttribute('src', 'img/babyboy.png');
            } else if (idade >= 11 && idade <= 18) {
                //adole
                img.setAttribute('src', 'img/tboy.png');
            } else if (idade >= 18 && idade <= 59) {
                //man
                img.setAttribute('src', 'img/man.png');
            } else {
                //old
                img.setAttribute('src', 'img/oldman.png');
            }       
                    //checando radio feminino
        } else if (fsex[1].checked) {
            gen = "Mulher";
            if(idade >= 0 && idade <= 10) {
                //kid
                img.setAttribute('src', 'img/babygirl.png');
            } else if (idade >= 11 && idade <= 18) {
                //adole
                img.setAttribute('src', 'img/twoman.png');
            } else if (idade >= 18 && idade <= 59) {
                //woman
                img.setAttribute('src', 'img/woman.png');
            } else {
                //old
                img.setAttribute('src', 'img/oldwoman.png');
            }
        }
        resultado.innerHTML = `Um(a) ${gen} de ${idade} anos`;
        resultado.appendChild(img);
    }
}