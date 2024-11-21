// lembrete p mim: callbacks são muito usados jem funcoes de array como map(), filter(), reduce()*
class Exam {
    constructor(answer, weight) {
        this.answer = answer;
        this.weight = weight; 
        this.exams = []; 
    }

    add(examDaVez) {
        this.exams.push(examDaVez); 
    }

    avg() {
        const calculateGrade = (exams, answer) => {
            let totalGrade = 0;
            for (const exam of exams) {
                for (let i = 0; i < answer.length; i++) {
                    if (exam.responses[i] === answer[i]) {
                        totalGrade += exam.weight[i];
                    }
                }
            }

            return totalGrade / exams.length;
        };

        return calculateGrade(this.exams, this.answer);
    }
}

    