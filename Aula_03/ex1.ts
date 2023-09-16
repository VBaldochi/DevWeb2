//Escreva um programa TypeScript que imprima todos os
//números primos de 1 a 53 usando a função **while**.

let number = 2;

while (number <= 53) {
    let isPrime = true;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) { 
            isPrime = false;
            //break;
        }
    }

    if (isPrime) {
        console.log(number);
    }

    number++;
}

