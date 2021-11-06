let agora = new Date();
let diaSemana = agora.getDay();

console.log(diaSemana); /* dias vão de 0 a 6, 0 sendo igual a domingo */

switch(diaSemana) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça");
        break;
    case 3:
        console.log("Quarta");
        break;
    case 4:
        console.log("Quinta");
        break;
    case 5:
        console.log("Sexta");
        break;
    case 6:
        console.log("Sabado");
        break;
    default:
        console.log("Erro dia inválido");        
}