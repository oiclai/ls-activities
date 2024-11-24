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
        let notas = this.exams.map(exam => exam.nota); 
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