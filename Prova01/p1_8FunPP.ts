// Exercício de Funções com Parâmetros Padrão - Calculadora Simples: 
// Implemente uma função de calculadora que pode realizar operações de adição, subtração, multiplicação e divisão com valores padrão de 0 se nenhum valor for fornecido. 

namespace FuncParamPadrao {
    
    function calcularSoma (valor1:number, valor2:number) {
        if (valor1 == null) {
            valor1 = 0
        }
        if (valor2 == null) {
            valor1 = 0
        }
         valor1 + valor2
        return valor1 + valor2;
    }
    function calcularSubtracao (valor1:number, valor2:number) {
        if (valor1 == null) {
            valor1 = 0
        }
        if (valor2 == null) {
            valor1 = 0
        }
        return valor1 - valor2;
    }
    function calcularMultiplicacao (valor1:number, valor2:number) {
        if (valor1 == null) {
            valor1 = 0
        }
        if (valor2 == null) {
            valor1 = 0
        }
        
        return valor1 * valor2;
    }
    function calcularDivisao (valor1:number, valor2:number) {
        if (valor1 == null) {
            valor1 = 0
        }
        if (valor2 == null) {
            valor1 = 1 // Não existe div por 0
        }
        return valor1 / valor2;
    }

    let resultadoSoma: number = calcularSoma(3, 7);
    console.log (`A soma dos valores é de ${resultadoSoma}`);

    let resultadoSub: number = calcularSubtracao(3, 7);
    console.log (`A diferença dos valores é de ${resultadoSub}`);

    let resultadoMult: number = calcularMultiplicacao(3, 7);
    console.log (`O produto dos valores é de ${resultadoMult}`);

    let resultadoDiv: number = calcularDivisao(3, 7);
    console.log (`A divisão entre os valores é de ${resultadoDiv}`);
}
