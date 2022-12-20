//Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

const a = 11;
const b = 6;
const c = 3;

if(a > b && a > c) {
  console.log('A é o maior número')
} else if (b > a && b > c) {
  console.log('B é o maior número')
} else if (c > a && c > b) {
  console.log('C é o maior número')
}