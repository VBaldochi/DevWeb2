// Exercício de Estrutura de Repetição - Soma dos Números Pares: 
// Escreva um programa que soma todos os números pares de 1 a 100 e exiba o resultado. 

namespace EstruturaRep {
    let somatorio:number = 0

    for (let indice:number = 1; indice <= 100; indice++) {
        let ehPar:boolean = indice % 2 === 0 ? true : false;
        if(ehPar) {
            somatorio += indice;
        }  
    }

    console.log(`A soma de 1 a 100 é: ${somatorio}`);
}
