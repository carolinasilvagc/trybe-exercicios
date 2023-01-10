// Agora, inverta o lado do triângulo.
/* 
n = 5

    *
   **
  ***
 ****
***** 
*/

const tamanhoTriangulo = 5;
const asterisco = '*';
let linhaPreenchida = '';
let posicao = tamanhoTriangulo -1;

for(let linha = 0; linha < tamanhoTriangulo; linha += 1){
  for(let coluna = 0; coluna < tamanhoTriangulo; coluna +=1) {
    if(coluna < posicao) {
      linhaPreenchida += ' ';
    } else {
      linhaPreenchida += asterisco;
    }
  }
  console.log(linhaPreenchida);
  linhaPreenchida = '';
  posicao -= 1;
};