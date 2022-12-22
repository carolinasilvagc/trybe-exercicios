//Faça um programa que diz se um número definido numa variável é primo ou não.

let number = 3;
let divisors = 1;

for(let i = 2; i <= number; i += 1) {
  if(number % i === 0)  {
    divisors += 1;
  }
};

if (divisors === 2) {
  console.log(number + ' é primo');
} else {
  console.log(number + ' não é primo');
};