//Faça um programa que recebe um número inteiro e verifique se esse número é par ou ímpar.

namespace ex04 {
    let num: number = 70

    if (num % 2 == 0) {
        console.log (`O número ${num} é Par!`)
    } else {
        console.log (`O número ${num} é Ímpar!`)
    }

    //OPERADOR TERNÁRIO
    let num2: number = 75;

    const res: string = num2 % 2 == 0 ? "Par" : "Ímpar";

    console.log(`O número ${num2} é ${res}!`);

}