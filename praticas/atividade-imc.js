// dados js;
// funcao nativa do js: toUpperCase() (equivalente ao upper() em Python);
// '||' = 'ou'; 
// push() = 'append()'
//linha 25, explicação !!!!!!!!!!!!
// (1) .map(u => u.imc);
// - a funcao map() vai retornar uma nova array; no caso da array user_imcs, para cada item, é definida uma função de transformação sendo ela a 'u => u.imc'
//  .map() percorre cada elemento do array original e aplica a função de transformação a cada item
// o .map() retorna o novo array que contém os resultados da transformação para cada elemento do array original, mudando os itens

// exemplo)

// let numeros = [1, 2, 3, 4];
// let multiplicados = numeros.map(num => num * 2);
// console.log(multiplicados); // [2, 4, 6, 8]

// -> no coontexto da questao. . . . user_imc contem os elem no formato '{nome: 'nome da pessoa', imc: valor}'
//  let descobrirMaior = user_imcs.map(u => u.imc); -> é aplicada para acessar apenas o valor do imc & o map cria uma nova array com esse valores


// Math.max -> descobrir o maior num dentre os presentes; max()
// (2) Math.max(...descobrirMaior);
//'...' no (...descobrirMaior) = operador de espalhamento (spread operator);
// Ele é utilizado para expandir ou "espalhar" elementos de um array ou propriedades de um objeto em um contexto onde múltiplos elementos são esperados.

// exemplo) 

// let numeros = [1, 2, 3, 4, 5];
// let maior = Math.max(...numeros); // Isso se torna Math.max(1, 2, 3, 4, 5)
// console.log(maior); // Retorna 5


function maior_imc(user_pesos) {
    let user_imcs = [];
    
    for (let user of user_pesos) {
        let nome = user['nome'];
        let peso = user['peso'];
        let altura = user['altura,CM']; 

        if (peso == null || altura == null) {
            return 'Error: HÁ COLUNAS NÃO ESTRUTURADAS NA TABELA';
        }

        // CÁLCULO 
        let calc = (peso / (altura ** 2));
        user_imcs.push({nome: nome, imc: calc}); // como dic
    }

    // bloco: descobrir o maior imc
    let descobrirMaior = user_imcs.map(u => u.imc);
    let maior = Math.max(...descobrirMaior); // Encontra o maior IMC
    
    let maioresImcs_user = [];
    for (let user of user_imcs) { // Corrigido para iterar sobre user_imcs
        if (user.imc >= maior) {
            maioresImcs_user.push('${user.nome.toUpperCase()} TEM O MAIOR IMC: ${user.imc}');
        }
    }
    
    return maioresImcs_user;
}

let user_pesos = [
    {'nome': 'Joana', 'peso': 48, 'altura,CM': 1.64},
    {'nome': 'Livia', 'peso': 56, 'altura,CM': 1.69},
    {'nome': 'Carla', 'peso': 78, 'altura,CM': 1.82},
    {'nome': 'German', 'peso': 45, 'altura,CM': 1.40},
    {'nome': 'Tadeo', 'peso': 78, 'altura,CM': 1.79}
]; // object type

console.table(user_pesos);
let maioresImcs_user = maior_imc(user_pesos);

for (let user of maioresImcs_user) {
    console.log(user);
}