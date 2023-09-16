//Crie um algoritmo que solicite três números do usuário e exiba o maior deles.

namespace ex06 {
    let n1: number = 16;
    let n2: number = 8;
    let n3: number = 20;

    if (n1 > n2 && n1 > n3) {
        console.log (`O maior valor digitado é ${n1}`)
    } else if (n2 > n1 && n2 > n3) {
        console.log (`O maior valor digitado é ${n2}`)
    } else if (n3 > n2 && n3 > n1) {
        console.log (`O maior valor digitado é ${n3}`)
    };
}