//Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

//Valor de teste: N = 5.

//Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function summation(number) {
  let result = 0;
  for(let index = 1; index <= number; index +=1 ) {
    result += index;
  }
  return result;
}