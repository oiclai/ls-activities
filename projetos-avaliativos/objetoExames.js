// lembrete p mim: callbacks são muito usados jem funcoes de array como map(), filter(), reduce()*
class Exam {
    constructor(answer, weight) {
        this.answer = answer; // gabarito
        this.weight = weight; // peso das questoes
        this.exams = []; // exames feitos
    }
    add(exam) {
        let nota = 0;
        for (const questao in this.answer.alternativas) {
            if (exam.alternativas[questao] === this.answer.alternativas[questao]) {
                nota += this.weight[questao];
            }
        }
        exam.nota = nota;
        this.exams.push(exam); // conclui adicionando a nota do aluno no array
    }
    avg(){
        let somaNotas = 0;
        for(let exam of this.exams){ 
        somaNotas += exam.nota;
        }
        let media = somaNotas/this.exams.length; 
        media = media.toFixed(1); // 100% opicional mas acho q fica melhor assim
        return media;
    }

    min(){
        let notas = this.exams.map(exam => exam.nota); // * recebe cada elemento (exame) da lista filtrada e retorna apenas o valor de exam.grade (a nota do exame) e sim gera um novo array
        let menorNota = Math.min(...notas); // Math.min para encontrar o menor valor no caso a nota
        return [menorNota]; // mas retorna como um array
    }
    max(){
        let notas = this.exams.map(exam => exam.nota); 
        let maiorNota = Math.max(...notas); // Math.max para encontrar o maior valor no caso a nota
        return [maiorNota];
    }

    lt(notaBaseComparacao){
        return this.exams.filter(exam => exam.nota < notaBaseComparacao).map(exam => exam.nota);
    }
    gt(notaBaseComparacao){
        return this.exams.filter(exam => exam.nota > notaBaseComparacao).map(exam => exam.nota);
    }
}

// teste instanciando para ver se funciona:

// Definindo o gabarito e os pesos das questões
// const gabarito = {
//     alternativas: {
//         questao1: 'A',
//         questao2: 'C',
//         questao3: 'B',
//     }
// };

// const pesos = {
//     questao1: 2,
//     questao2: 3,
//     questao3: 5
// };

// // Criando a instância do Exame
// const exame = new Exam(gabarito, pesos);

// // Adicionando exames com alternativas e notas
// exame.add({ alternativas: { questao1: 'A', questao2: 'C', questao3: 'B' } });
// exame.add({ alternativas: { questao1: 'B', questao2: 'C', questao3: 'B' } });
// exame.add({ alternativas: { questao1: 'A', questao2: 'B', questao3: 'B' } });

// // Exibindo a média, menor, maior, e notas de comparação
// console.log("Média das notas:", exame.avg());  // Média das notas
// console.log("Menor nota:", exame.min());      // Menor nota
// console.log("Maior nota:", exame.max());      // Maior nota
// console.log("Notas menores que 5:", exame.lt(5)); // Notas menores que 5
// console.log("Notas maiores que 5:", exame.gt(5)); // Notas maiores que 5