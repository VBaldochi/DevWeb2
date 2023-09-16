//Crie um array com 5 numeros. Em seguida, use um loop for para iterar sobre o array e exibir a soma de todos os numeros
namespace ex1{
    //Crie um array com 5 numeros
    let numero: number[] = [1, 20, 30, 30, 40];
    let soma: number = 0;
    //Em seguida, use um loop for para iterar sobre o array
    for(let i = 0; i< numero.length; i++){
        //Soma
        soma = soma + numero[i];
        // soma += numero[i]
    }

    //Exibir os numeros
    console.log(`A soma dos valores do vetor é: ${soma}`);
}