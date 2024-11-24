function min (array){
    let menor = Infinity; // teste
    for (const i of array) {
      if (i < menor){
        menor = i;
      }
    }
    return menor;
  }
  
function max (array){
    let maior = -(Infinity); // teste
    for (const i of array) {
      if (i > maior){
        maior = i;
      }
    }
    return maior;
  }
  
function range (num){
    array = []
    for (let flag = 0; flag <= num; flag +=1){
      array.push(flag);
    }
  }
  
function range (numInicial, numFinal){
    array = []
    for (let flag = numInicial; flag <= numFinal; flag +=1){
      array.push(flag);
    }
  }
  
function range (numInicial, numFinal, numPassos){
    array = []
    for (let flag = numInicial; flag <= numFinal; flag +=numPassos){
      array.push(flag);
    }
  }
function zip (...arguments) {
  let tamanhoArray = arrayNomes.length; let flag = 0;
  array = [];
  for (flag; flag < tamanhoArray; flag++){
    for ()
  }
}
