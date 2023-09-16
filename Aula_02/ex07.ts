//Faça um programa que leia um número inteiro entre 1 e 12 e imprima o mês correspondente, sendo 1 para janeiro, 2 para fevereiro, e assim por diante.

namespace ex07 {
    let num: number = 8;

    if (num > 12 || num < 1) {
        console.log('O Número deve ser estar no intervalo de 1 a 12.')
    } else if (num == 1) {
        console.log (`Mês ${num} é Janeiro.`)
    } else if (num == 2) {
        console.log (`Mês ${num} é Fevereiro.`)
    } else if (num == 3) {
        console.log (`Mês ${num} é Março.`)
    } else if (num == 4) {
        console.log (`Mês ${num} é Abril.`)
    } else if (num == 5) {
        console.log (`Mês ${num} é Maio.`)
    } else if (num == 6) {
        console.log (`Mês ${num} é Junho.`)
    } else if (num == 7) {
        console.log (`Mês ${num} é Julho.`)
    } else if (num == 8) {
        console.log (`Mês ${num} é Agosto.`)
    } else if (num == 9) {
        console.log (`Mês ${num} é Setembro.`)
    } else if (num == 10) {
        console.log (`Mês ${num} é Outubro.`)
    } else if (num == 11) {
        console.log (`Mês ${num} é Novembro.`)
    } else if (num == 12) {
        console.log (`Mês ${num} é Dezembro.`)
    };
}