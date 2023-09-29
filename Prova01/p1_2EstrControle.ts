// Exercício de Estrutura de Controle - Verificador de Número Par: 
// Crie um programa que verifica se um número é par ou ímpar e exiba o resultado. 

namespace EstruturaControle {
    let numero:number = 27

    let resultado:string = numero % 2 == 0 ? "Par" : "Ímpar";

    console.log(`O número ${numero} é ${resultado}`)
}
