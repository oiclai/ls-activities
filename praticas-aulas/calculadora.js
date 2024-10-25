// sem a função de input(), entradas pre-definidas:
let firstInput = 3; let secondInput = 6; let chosenOperation='+';

function Calculator(firstInput, secondInput, chosenOperation){
    switch(chosenOperation){
        case '+':
            return firstInput+(secondInput)
        case '-':
            return firstInput-(secondInput)
        case '*':
            return firstInput*(secondInput)
        case '/':
            return firstInput/(secondInput)
    }
}

console.log(`O RESULTADO É: ${Calculator(firstInput, secondInput, chosenOperation)}`)