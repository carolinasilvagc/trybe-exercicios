//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
/* Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

function sum(a, b) {
  return a + b;
};
function subtraction(a, b) {
  return a - b;
};
function mult(a, b) {
  return a * b;
};
function division(a, b) {
  return a / b;
};
function module(a, b) {
  return a % b;
};

//Faça um programa que retorne o maior de dois números.

function biggestNumber(valueA, valueB) {
  if(valueA > valueB) {
    return valueA;
  }
  return valueB;
}

//Faça um programa que retorne o maior de três números.

function biggestof3Numbers(valueA, valueB, valueC) {
  if(valueA > valueB && valueA > valueC) {
    return valueA;
  } else if(valueB > valueA && valueB > valueC) {
    return valueB;
  }
  return valueC;
}

//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function positiveNegative(value) {
  if(value > 0) {
    return 'Positive';
  } else if(value < 0) {
    return 'Negative';
  }
  return 'Zero';
}

//Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

function triangle(ang1, ang2, ang3) {
  if(ang1 + ang2 + ang3 === 180){
    return true;
  } else if(ang1 < 0 || ang2 < 0 || ang3 < 0) {
    return 'Erro: Ângulo de valor inválido.'
  }
  return false;
}