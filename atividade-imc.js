// dados js;
// funcao nativa do js: toUpperCase() (equivalente ao upper() em Python);
// '||' = 'ou'; 
// push() = 'append()'
//linha 25, explicação !!!!!!!!!!!!
//  .map(u => u.imc);
//  Math.max(...descobrirMaior);
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