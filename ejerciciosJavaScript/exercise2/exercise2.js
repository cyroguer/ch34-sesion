function dobleArr (arrNum){// funcion  de parametro tiene un arreglo de numeros
    let doble = arrNum.map((elemento, indice) =>{ //variable que contiene el resultado del metodo map sobre aarrelo de numeros 
        console.log(`este es el elemento ${elemento} en el indice ${indice}`)//imprime con el elemento y el indice actual
        let resultado = elemento*2 // variable contiene el elemento actual multiplicado por 2 
        console.log(`el resultado doble de ${elemento} es ${resultado}`) // imprime el elemento y su resultado doble 
        return resultado // devuelve el resultado 
    } ) 
    console.log(doble); //imprime el arreglo  con su contenido multiplicado por dos 
}
dobleArr([1, 5, 4, 7, 322]);// llama funcion doblearr con un parametro de arreglo de numeros

