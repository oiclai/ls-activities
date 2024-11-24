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
}