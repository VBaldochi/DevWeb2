// Exercício de Listas - Média de Notas: 
// Crie um programa que recebe uma lista de notas de estudantes e calcula a média das notas. 

namespace Lista {
    let notas: number[] = [9, 2.5, 7, 6.5];
    let soma: number = 0

        for (let i = 0; i < notas.length; i++) {
        soma += (notas[i]);
        }

    let media:number = soma / (notas.length);

    console.log(`A Média das notas é: ${media}`);
}