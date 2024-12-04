/* 
Aceder al primer elemento de la lista
*/

const botanas = document.getElementsByTagName("li");

/* Propiedad clss list 

accedemos a la lista de clases que tiene un elemento  

    eleemento.classList

-devueleve un token list (listado de clases en el DOM) en tipo array
*/

console.log(botanas[0].classList[1]);

/* para agreagr clases uutilizamos el metodo add

    elemento.classList.add(clase)

- nombr de la clase pasa como string entre " "
*/

botanas[2].classList.add("bg-lightpink");

/* 
Verificar si existe una clase en ele lemento con el metodo contains

    elemento.classList.contains(clase)

- devuelve true si la clase existe en el elemento
- devuelve false si la clase no existe en el elemento
- la clase pasa como string ("")
*/

console.log(botanas[2].classList.contains("botana"));
console.log(botanas[2].classList.contains("bg-lightblue"));

/* 
Para eliminar una clase con el metodo remove

    elemento.classList.remove(clase)

- la clase pasa como string ("")
*/

botanas[3].classList.remove("bg-lightpink");
botanas[3].classList.remove("botana");
