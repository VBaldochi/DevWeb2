// Exercício de Funções Simples - Calculadora de Área: 
// Implemente uma função que calcula a área de um retângulo com base na largura e altura fornecidas como argumentos. 

namespace FunSimples {
    function calcArea(comp:number, larg:number) {
        let area:number = 0;
        area = comp*larg;
        return area;
    }

    let comp: number = 20;
    let larg: number = 47;

    let areaf = calcArea(comp, larg);

    console.log(`A área é de: ${areaf} cm²`)
}