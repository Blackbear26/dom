/* 
metodos de navegacion

estos metodos nos permiten navegar entre los nodos del DOM*/

//referencia

const padre = document.getElementById("parent")
const hijo = document.getElementById("child")
const hermano = document.getElementById("sibling")

/* parentNode -> devuelve el nodo padre

sinatxis

    element.parentNode
*/

console.log(hijo.parentNode);
/* cildrenode -> devuelve una coleccion de nodos de todos los |incluye elementos de texto, 
comentarios y espacios en blanco

sintaxis

    element.children
*/

console.log(padre.childNodes);

/* children -> devuelve una coleccion de html de los nodos hijos que son elementos de html esto va a ignorar nodos de texto o comentarios 

sinatxis

    element.children
*/

console.log(padre.children);

/* firstchild -> devuelve el primer hijo puede ser un nodo de texto, comentario o elemento  
 
sintaxis 
    
    element.firstChild
*/

console.log(padre.firstChild);

/* firstElementChild -> devuelve el primer hijo de un nodo de html 

sintaxis

    element.firstElementChild
*/

console.log(padre.firstElementChild);

/* lastchild -> devuelve el ultimo hijo puede ser un nodo de texto, comentario o elemento  
   
sintaxis 

     element.lastChild
*/

console.log(padre.lastChild);

/* lastElementChild -> devuelve el ultimo hijo de un nodo de html
 
sintaxis

    element.lastElementChild
*/

console.log(padre.lastElementChild);

/* netxSibling -> devuelve el siguiente hermano 
     
 sintaxis

    element.nextSibling
*/

console.log(hermano.nextSibling);

/* nextElementSibling -> devuelve el siguiente hermano de un nodo de html y que sea un elemento
        
sintaxis

    element.nextElementSibling
*/

console.log(hermano.nextElementSibling);

/* previousSibling -> devuelve el hermano anterior 
    
sintaxis

    element.previousSibling
*/

console.log(hermano.previousSibling);

/* previousElementSibling -> devuelve el hermano anterior de un nodo de html y que sea un elemento
        
sintaxis

    element.previousElementSibling
*/

console.log(hermano.previousElementSibling);
