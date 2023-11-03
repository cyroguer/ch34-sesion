//Codigo mas optimo

var arr = [1, 2, 3, 4].reduce((acumulado, valorActual) => {//asigno resultado de metodo reduce hecho sobre un arreglo a varriable obj
  return {
    suma: acumulado.suma + valorActual,
    multi: acumulado.multi * valorActual
  };
  
}, 
                              
{ suma: 0, multi: 1 });//asigno valores iniciales 

console.log(arr);






// ejercicio 3
const arre = [1, 2, 3, 4]; //declaro arreglo
const sum = arre.reduce((acumulado, valorActual) => acumulado + valorActual); //asigno una variable con el resultado del metodo reduce para suma
const mult = arre.reduce((acumulado, valorActual) => acumulado * valorActual);//asigno una variable con el resultado del metodo reduce para multiplicacion
console.log("the sum is: " + sum);// imprime resultado de sum
console.log("the product is: " + mult);//imprime resultado de mult

// 10 suma, y 24 resultado de multiplicación




