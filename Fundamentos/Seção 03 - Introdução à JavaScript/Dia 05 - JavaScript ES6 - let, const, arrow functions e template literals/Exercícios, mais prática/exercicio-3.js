//🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

//Ex: longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const longestWord = (phrase) => {
  const wordArray = phrase.split(' ');
  let result = '';
  let maxLengthWord = 0;

  for(let word of wordArray) {
    if(word.length > maxLengthWord) {
      maxLengthWord = word.length;
      result = word;
    }
  }
  return result;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));