//Crie um algoritmo que imprima na tela o fatorial de 10.
//O fatorial é representado pelo sinal !
//4! = 4 x 3 x 2 x 1 = 24

const numero = 10;
let fatorialNumero = 1;

for(let i = 1; i <= numero; i += 1){
  fatorialNumero = fatorialNumero * i;
}

console.log(fatorialNumero);

//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let newWord = '';

for(let i = word.length - 1; i >= 0; i -= 1){
  newWord += word[i];
}

console.log(newWord);

//Considere o array de strings abaixo:
//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let shortestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < shortestWord.length) {
    shortestWord = array[index];
  }
}

console.log(biggestWord);
console.log(shortestWord);


//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let biggestPrimeNumber = 0;

for(let i = 2; i <= 50; i+= 1) {
  let isPrime = true;
  for(let ii = 2; ii < i; ii += 1) {
    if(i % ii === 0) {
      isPrime = false;
    }
  }
  if(isPrime) {
    biggestPrimeNumber = i;
  }
}

console.log(biggestPrimeNumber)