// Exercício de Listas - Média de Notas: 
// Crie um programa que recebe uma lista de notas de estudantes e calcula a média das notas. 

namespace Lista {
    let notasAlunos: number[] = [9, 2.5, 7, 6.5];
    let somatorio: number = 0

    for (let indice = 0; indice < notasAlunos.length; indice++) {
        somatorio += (notasAlunos[indice]);
    }

    let mediaNotas:number = somatorio / (notasAlunos.length);

    console.log(`A Média das notas é: ${mediaNotas}`);
}
