//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

//Array de teste: [2, 4, 6, 7, 10, 0, -3];.

//Valor esperado no retorno da função: 6.

function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] > numeros[indice]) {
      indiceMaior = indice;
    }
  }

  return indiceMaior;
}