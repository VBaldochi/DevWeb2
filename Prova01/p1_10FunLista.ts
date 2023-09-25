// Exercício de Funções com Listas - Ordenar Lista: 
// Escreva uma função que recebe uma lista de números e a ordena em ordem crescente. 

namespace FunLista {
    function ordenar(lista: number[]): number[] {
        const n = lista.length;
    
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                // Trocando os elementos se estiverem fora de ordem
                if (lista[j] > lista[j + 1]) {
                    const troca = lista[j];
                    lista[j] = lista[j + 1];
                    lista[j + 1] = troca;
                }
            }
        }
    
        return lista;
    }
    
    // Exemplo de uso:
    const listaDesordenada = [5, 2, 9, 1, 5, 6];
    const listaOrdenada = ordenar(listaDesordenada);
    console.log(`Lista ordenada: ${listaOrdenada}`);
}