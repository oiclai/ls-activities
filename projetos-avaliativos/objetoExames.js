// lembrete p mim: callbacks são muito usados jem funcoes de array como map(), filter(), reduce()*
class Exam {
    constructor(answer, weight) {
        this.answer = answer; // resposta certa
        this.weight = weight; // peso
        this.exams = []; // guardando exames realizados pelos estudantes
    }

    add(examDaVez) {
        this.exams.push(examDaVez); // push -> adicionando o exame da vez
    }

    avg() { // parece que fica visualmente melhor com funcao anonima mas n sei usar*
        function somarPesos(valorPesoAcumulado, examDaVez) {
            return valorPesoAcumulado + examDaVez.weight; // juntando os pesos
          }
          
          const totalWeight = exams.reduce(somarPesos, 0);
          const media = totalWeight / this.exams.length;

          return media;
        }
    }