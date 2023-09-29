// Exercício de Funções Recursivas - Fibonacci: 
// Crie uma função recursiva para calcular o n-ésimo termo da sequência de Fibonacci.

namespace fibonacci {
    function calcularFibonacci(n: number): number {
        if (n <= 1) {
            return n; // Caso base: se n for 0 ou 1, retorna n
        } else {
            return calcularFibonacci(n - 1) + calcularFibonacci(n - 2); // Chamada recursiva
        }
    }
    
    // Exemplo de uso: calcular o 10º termo da sequência de Fibonacci
    let numeroTermo:number = 4
    const termoFibonacci = calcularFibonacci(numeroTermo);
    console.log(`O ${numeroTermo}º termo da sequência de Fibonacci é: ${termoFibonacci}`);
}
