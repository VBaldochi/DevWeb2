// Exercício de Funções Recursivas - Fibonacci: 
// Crie uma função recursiva para calcular o n-ésimo termo da sequência de Fibonacci.

namespace fibonacci {
    function fibonacci(n: number): number {
        if (n <= 1) {
            return n; // Caso base: se n for 0 ou 1, retorna n
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2); // Chamada recursiva
        }
    }
    
    // Exemplo de uso: calcular o 10º termo da sequência de Fibonacci
    let num:number = 4
    const termo = fibonacci(num);
    console.log(`O ${num}º termo da sequência de Fibonacci é: ${termo}`);
}