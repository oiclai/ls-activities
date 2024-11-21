// lembrete p mim: callbacks são muito usados jem funcoes de array como map(), filter(), reduce()*
class Exam {
    constructor(answer, weight) {
        this.answer = answer; // resposta correta
        this.weight = weight; // peso das questoes
        this.exams = []; // respostas do aluno q ainda serao adcionadas
    }
    add(respostasAluno) {
        this.exams.push(respostasAluno); 
    }
}
// n to entendendo oq é p fazer, perguntar ao professor