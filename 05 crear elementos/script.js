/* 
Obtener el elemento referencia 

- este es el nodo de HTML que contiene la lista de peliculas
*/

const movies = document.getElementById("movies");

/* 
Parar ctrear un nuevo elemento usamos el metodo createElement

    document.createElement(elemento)

- devuelve un objeto del tipo Element
- el tipo de elemento pasa como string
- se deve guardar en una variable o constante
*/

const newMovie = document.createElement("li")

/* 
Para agregar el elemento al DOM desde el elemento usamos el metodo append

    elementoReferencia.append(nuevoElemento)

- el nuevo no pasa como string
*/

movies.append(newMovie)

/* 
agregamos texto al nuevo elemnto con innerText

    Elemento.innerText = valor 

- el valor pasa como string
*/

newMovie.innerText = "🕸️Spiderman";

/* agregamos las clases con el metodo add

    Elemento.classList.add(clase)

- el metodo add acepta mas de un parametro y se separan con comas
*/

newMovie.classList.add("list-item", "bg-two");

/* agrega un elemento al final de la lista con el nombre Moana */

const newMovie2 = document.createElement("li")
movies.append(newMovie)
newMovie.innerText = "Moana";
newMovie.classList.add("list-item", "bg-one");