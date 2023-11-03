let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
//1.	Write a command that prints out all of the people in the list.
console.log("1. "+people);

//2.	Write the command to remove "Dani" from the array.
people.splice(1,1);//(incide donde empieza, cuantos va a borrar)
console.log("2. "+people);

//3.	Write the command to remove "Juan" from the array.
people.splice(2,1);
console.log("3. "+people);

//4.	Write the command to move "Luis" to the front of the array.
let elementoBorrado =   people.splice(1,1) //remueve el segundo elemento del arreglo, regresa un arreglo con los elementos que quito y agarramos el primer elemnento de ese arreglo (en este caso Luis que esta en la posicion 0del arreglo que devolcio splice)
people.unshift(elementoBorrado[0]); //push agrega al final del arreglo lo que le pasemos del argumento
console.log("4. "+people);

//people.push(people.splice(1,1)[0]); sin variable que guarda elemento borrado 

//console.log("log5"+people);

//5.	Write the command to add your name to the end of the array.
people.push("Cynthia");
console.log("5. "+people);

//6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
for (let i = 0; i<people.length; i++ ){
  let elemento = people[i];
  console.log("6. "+elemento)
  if (elemento == "Maria"){
    break;
  }
  
}

//7.	Write the command that gives the indexOf where "Maria" is located.

let lugar = people.indexOf("Maria");
console.log("7. El indice de Maria es: " + lugar);

//At the end of the exercise, there should be 4 people in the array.
console.log(people);
