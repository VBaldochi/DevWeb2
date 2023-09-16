namespace Ex03{
    function criarNovoArray( num1: number, num2: number, num3: number){
        let array: number[] = [];
        array.push(num1);
        array.push(num2);
        array.push(num3);
        return array;
    }

    let meuArrayInicial = criarNovoArray(20, 30, 40);
    console.log(meuArrayInicial);

    function removeValor( array: number[]){
        if(array.length > 0){
            array.pop();
        }
        return array
    }

    let meuArrayModificado = removeValor(meuArrayInicial);
    console.log(meuArrayModificado);
}