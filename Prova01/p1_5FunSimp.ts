// Exercício de Funções Simples - Calculadora de Área: 
// Implemente uma função que calcula a área de um retângulo com base na largura e altura fornecidas como argumentos. 

namespace FunSimples {
    function calcularArea(comprimento:number, largura:number) {
        let areaRetangulo:number = 0;
        areaRetangulo = comprimento * largura;
        return areaRetangulo;
    }

    let comprimentoRetangulo: number = 20;
    let larguraRetangulo: number = 47;

    let areaFinal = calcularArea(comprimentoRetangulo, larguraRetangulo);

    console.log(`A área é de: ${areaFinal} cm²`)
}
