//Variaveis simples guardam apenas um valor

// variaveis compostas guardam diversos valores - são arrays começam pelo indice 0
let num = [5,8,4];
console.log(num);
num.push(7); //adiciona valor no último array
console.log(num);

console.log(`O array tem ${num.length} posições`); //verifica tamanho do array
console.log(`O array tem na primeira posição o valor: ${num[0]}`); //verifica tamanho do array
console.log(`Ordenando os valores de maneira crescente temos ${num.sort()}`); //ordena em valores crescentes

let posicao = num.indexOf(8);
console.log(`\n O valor 8 se encontra na posição ${posicao}`);

//if para verificar se o valor existe ou não
if (posicao == -1) {
    console.log("Valor não foi encontrado");
} else {
    console.log(`\n O valor se encontra na posição ${posicao}`);
}
