//Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

//Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

//Exemplo: bishop (bispo) -> diagonals (diagonais)

const chessPiece = 'QUEEN'.toLowerCase();

switch(chessPiece) {
  case 'pawn': 
    console.log('forward');
    break;
  case 'bishop':
    console.log('diagonals');
    break;
  case 'rook':
    console.log('vertical/horizontal');
    break;
  case 'knight':
    console.log('L pattern');
    break;
  case 'queen':
    console.log('any direction, any distance');
    break;
  case 'king':
    console.log('any direction, just one movement');
    break;
  default:
    console.log('Error: this is not a chess piece.')
}