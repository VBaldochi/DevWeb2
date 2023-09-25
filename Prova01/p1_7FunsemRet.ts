// Exercício de Funções sem Retorno - Imprimir Padrão: 
// Crie uma função que imprime um padrão simples, como uma pirâmide de asteriscos. 

namespace FunSemRet {
  function padrao(numLinhas: number) {
    for (let i = 1; i <= numLinhas; i++) {
        let linha:string = '';
        for (let j = 1; j <= i; j++) {
            linha += '* ';
        }
        console.log(linha);
    }
}

padrao(10);  
}