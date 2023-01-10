//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;

for(let i = 0; i < numbers.length; i += 1) {
  let numero = numbers[i];
  if(numero > maiorNumero) {
    maiorNumero = numero;
  }
}

console.log(maiorNumero)