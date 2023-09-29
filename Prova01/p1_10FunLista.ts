// Exercício de Funções com Listas - Ordenar Lista: 
// Escreva uma função que recebe uma lista de números e a ordena em ordem crescente. 

namespace FuncLista {
    function ordenarNumeros(listaNumeros: number[]): number[] {
        const tamanhoLista = listaNumeros.length;
    
        for (let indiceI = 0; indiceI < tamanhoLista - 1; indiceI++) {
            for (let indiceJ = 0; indiceJ < tamanhoLista - 1; indiceJ++) {
                // Trocando os elementos se estiverem fora de ordem
                if (listaNumeros[indiceJ] > listaNumeros[indiceJ + 1]) {
                    const trocaTemporaria = listaNumeros[indiceJ];
                    listaNumeros[indiceJ] = listaNumeros[indiceJ + 1];
                    listaNumeros[indiceJ + 1] = trocaTemporaria;
                }
            }
        }
    
        return listaNumeros;
    }
    
    // Exemplo de uso:
    const listaDesordenada = [5, 2, 9, 1, 5, 6];
    const listaOrdenadaNumeros = ordenarNumeros(listaDesordenada);
    console.log(`Lista ordenada: ${listaOrdenadaNumeros}`);
}
