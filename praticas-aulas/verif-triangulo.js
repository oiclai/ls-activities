function verificacaoTriangulo(a,b,c) {
    if (!(a + b > c && a + c > b && b + c > a)) {
        return 'Não é um triângulo';
    }
    else if (a === b && b === c) {
        return 'Equilátero';
    } else if (a === b || b === c || a === c) {
        return 'Isósceles';
    } else {
        return 'Escaleno';
    }
}
console.log(verificacaoTriangulo(2,2,2));
// node praticas-aulas/verif-triangulo.js
