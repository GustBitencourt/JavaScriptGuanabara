let idade = 13;
console.log(`Sua idade é de ${idade}anos`);
if(idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

console.log("\n Idade votação");

let idadeVotacao = 18;
console.log(`Sua idade é de ${idadeVotacao} anos`);

if(idadeVotacao < 16) {
    console.log("Você não pode votar");
} else if(idadeVotacao < 18 || idadeVotacao > 65) {
    console.log("O voto é opcional!");
} else {
    console.log("Você tem a obrigação de votar!");
}