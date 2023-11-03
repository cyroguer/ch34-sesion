let arr = ["This", "is", "a", "sentence."];
function printOutString() { //no hay parametro 
  let result = arr.join(" ");// ("") SEPARADOR, se crea una variable para guardar la cadena unida por el metodo join
    console.log(result); //imprime resultado hast que se vuelva a llamar la funcion, porque result solo exite dentro de esta funcion, es una variabe local
}

printOutString(); // se llama de nuevo la función para que imprime el resultado
