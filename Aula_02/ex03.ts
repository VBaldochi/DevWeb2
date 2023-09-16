//Faça um programa que receba três números obrigatoriamente em ordem crescente e um quarto número que não siga esta regra. Mostre, em seguida, os quatro números em ordem decrescente.

namespace ex03 {
    let v1: number = 5;
    let v2: number = 7;
    let v3: number = 12;
    let v4: number = 9;

    if (v2 <= v1) {
        console.log ('O segundo valor deve obrigatoriamente ser maior que o primeiro valor. Reescreva as entradas')
    } else if (v3 <= v2) {
        console.log ('O terceiro valor deve obrigatoriamente ser maior que o segundo valor. Reescreva as entradas')
    } else if (v4 > v3) {
        console.log (`Os valores em ordem decrescente são: ${v4}, ${v3}, ${v2} e ${v1}.`)
    } else if (v4 < v3 && v4 > v2) {
        console.log (`Os valores em ordem decrescente são: ${v3}, ${v4}, ${v2} e ${v1}.`)
    } else if (v4 < v2 && v4 > v1) {
        console.log (`Os valores em ordem decrescente são: ${v3}, ${v2}, ${v4} e ${v1}.`)
    } else if (v4 < v1) {
        console.log (`Os valores em ordem decrescente são: ${v3}, ${v2}, ${v1} e ${v4}.`)
    };
}