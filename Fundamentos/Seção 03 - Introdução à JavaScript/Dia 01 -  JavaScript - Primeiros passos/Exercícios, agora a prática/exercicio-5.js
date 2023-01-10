//🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

const anguloA = 30;
const anguloB = 200;
const anguloC = 50;

if(anguloA + anguloB + anguloC == 180) {
  console.log(true)
} else if(anguloA < 0 || anguloB < 0 || anguloC < 0){
  console.log('Erro: ângulo inválido')
} else {
  console.log(false)
}