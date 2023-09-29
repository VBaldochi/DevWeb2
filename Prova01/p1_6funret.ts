// Exercício de Funções com Retorno - Fatorial: 
//Escreva uma função que calcula o fatorial de um número inteiro. 

namespace funcRetorno {
    function calcularFatorial (numero:number) {
        let fatorialNumero:number = 1;
        for (let contador=numero; contador >= 1; contador--) {
            fatorialNumero = fatorialNumero * contador
        }
        return fatorialNumero;
    } 

    let numeroFatorial: number = 4;
    let resultadoFatorial: number = calcularFatorial(numeroFatorial);

    console.log (`O fatorial do número ${numeroFatorial} é: ${resultadoFatorial}`);
}
