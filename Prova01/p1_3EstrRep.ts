// Exercício de Estrutura de Repetição - Soma dos Números Pares: 
// Escreva um programa que soma todos os números pares de 1 a 100 e exiba o resultado. 

namespace EstrRep {
    let soma:number = 0

    for (let i:number = 1; i <= 100; i++) {
        let par:boolean = i % 2 === 0 ? true : false;
        if(par) {
            soma +=i;
        }  
    }

    console.log(`A soma de 1 a 100 é: ${soma}`);
}