// Exercício de Estrutura de Controle - Verificador de Número Par: 
// Crie um programa que verifica se um número é par ou ímpar e exiba o resultado. 

namespace EstrutControle {
    let num:number = 27

    let res:string = num % 2 == 0 ? "Par" : "Ímpar";

    console.log(`O número ${num} é ${res}`)
}