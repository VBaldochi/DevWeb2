// Exercício de Funções com Parâmetros Padrão - Calculadora Simples: 
// Implemente uma função de calculadora que pode realizar operações de adição, subtração, multiplicação e divisão com valores padrão de 0 se nenhum valor for fornecido. 

namespace FunParamPadrao {
    
    function calcsoma (v1:number, v2:number) {
        if (v1 == null) {
            v1 = 0
        }
        if (v2 == null) {
            v1 = 0
        }
         v1 + v2
        return v1 + v2;
    }
    function calcsubtracao (v1:number, v2:number) {
        if (v1 == null) {
            v1 = 0
        }
        if (v2 == null) {
            v1 = 0
        }
        return v1 - v2;
    }
    function calcmultiplicacao (v1:number, v2:number) {
        if (v1 == null) {
            v1 = 0
        }
        if (v2 == null) {
            v1 = 0
        }
        
        return v1 * v2;
    }
    function calcdivisao (v1:number, v2:number) {
        if (v1 == null) {
            v1 = 0
        }
        if (v2 == null) {
            v1 = 1 // Não existe div por 0
        }
        return v1 / v2;
    }

    let resSoma: number = calcsoma(3, 7);
    console.log (`A soma dos valores é de ${resSoma}`);

    let resSub: number = calcsubtracao(3, 7);
    console.log (`A diferença dos valores é de ${resSub}`);

    let resMult: number = calcmultiplicacao(3, 7);
    console.log (`O produto dos valores é de ${resMult}`);

    let resDiv: number = calcdivisao(3, 7);
    console.log (`A divisão entre os valores é de ${resDiv}`);
}