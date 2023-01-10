//Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 10;
let asterisco = '*';
let linhaPreenchida = '';

for(let linha = 0; linha < n; linha += 1) {
  linhaPreenchida = linhaPreenchida + asterisco;
};

for(let coluna = 0; coluna < n; coluna += 1) {
  console.log(linhaPreenchida);
};