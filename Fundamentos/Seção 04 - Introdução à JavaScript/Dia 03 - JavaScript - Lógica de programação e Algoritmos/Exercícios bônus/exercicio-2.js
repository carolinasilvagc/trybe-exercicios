//Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

const tamanho = 5;
const asterisco = '*';
let linhaPreenchida = '';

for(let i = 0; i < tamanho; i += 1) {
  linhaPreenchida += asterisco;
  console.log(linhaPreenchida);
};
