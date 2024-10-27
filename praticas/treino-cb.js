// node praticas/treino-callback-2.js
//função: se um número é par
function IsEven (numero) { // CALLBACK
    return numero % 2 === 0;
}

// funcao : somar números pares em um array, usando callback para verificar se o número é par
function somaNumerosPares(arrayNumeros, callback) {
    let resultado = 0;
    for(const i of arrayNumeros){
        if(callback(i)) resultado += i;
    }
    return resultado;
}
console.log(somaNumerosPares([1, 2, 3, 4, 5], IsEven)); // Saída: 6
