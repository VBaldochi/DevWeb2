// Exercício de Funções com Retorno - Fatorial: 
//Escreva uma função que calcula o fatorial de um número inteiro. 

namespace funRet {
    function fatorial (num:number) {
        let fat:number = 1;
        for (let i=num; i >= 1; i--) {
            fat = fat * i
        }
        return fat;
    } 

    let num: number = 4;
    let resul: number = fatorial(num);

    console.log (`O fatorial do número ${num} é: ${resul}`);

}