// Exercício de Funções sem Retorno - Imprimir Padrão: 
// Crie uma função que imprime um padrão simples, como uma pirâmide de asteriscos. 

namespace FuncSemRetorno {
    function imprimirPadrao(numLinhas: number) {
      for (let contadorLinha = 1; contadorLinha <= numLinhas; contadorLinha++) {
          let linhaEstrelas:string = '';
          for (let contadorEstrela = 1; contadorEstrela <= contadorLinha; contadorEstrela++) {
              linhaEstrelas += '* ';
          }
          console.log(linhaEstrelas);
      }
  }
  
  imprimirPadrao(10);  
  }
  