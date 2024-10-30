// let raio = 10

// function areaCirculo(raio){
//     const pi = Math.PI; 
    
//     function calculoCirculo(pi, raio){
//         return pi*(raio**2)
//     }
    
//     let resultado = calculoCirculo(pi, raio)
    
//     return resultado
// }
// console.log(`area do circulo = ${areaCirculo(raio)}`)

// node areacirculo.js

let raio = 10
const pi = Math.PI; 

function areaCirculo(){
    
     function calculoCirculo(pi, raio){
        return pi*(raio**2)
     }
    
     return calculoCirculo
 }
console.log(`area do circulo = ${areaCirculo()(pi, raio)}`)

// node areacirculo.js