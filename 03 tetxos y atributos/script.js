/* 
selecionamos los elemntos por su id
*/

const titulo = document.getElementById("title");
const lista = document.getElementById("list");

console.log(titulo);
console.log(lista);

/* 
ineer text

devuelve un "string" del contenido visible dentro de un elemento

    innerText

exckuye los elementos ocultos
*/
console.log("resultados con innertext")
console.log(titulo.innerText);
console.log(lista.innerText);

/* 
textContent

devuelve un string visible dentro del contenido 

    elemento.textContent

-incluye los elementos oculto
-incluye los espacios
-excluye las etiquetas html
*/

console.log("resultados con innertext")
console.log(titulo.textContent);
console.log(lista.textContent);

/* 
innert Html

devuelve un string con la estructura interna del elemento seleccionado

    elemento.innerHTML

*/

console.log("resultados con innerHTML")
console.log(titulo.innerHTML);
console.log(lista.innerHTML);

/* 
modificar el contenido con inneText

Asignamos el valor al alemento seleccionado

    elemento.innerText = "stringDelValor"
*/

titulo.innerText = "Superheroes"
lista.innerText = "No Hay Superheroes"

/* 
modificamos el contenido con textContent

asignamos el valor al elemento seleccionado

    elemento.textContent
*/

titulo.textContent = "Mis Suoerheroes";
lista.textContent = "Cargando...";

/* 
modificar el conteniudo innerHTML

asignamos el valor al elemento seleccionado incluyendo las etiquetas html
   
    elemento.innerHTML = " <tag> ... </>tag"


*/

titulo.innerHTML = "Heroes <span>Superheroes</span>";
lista.innerHTML = "<li>Capitan America</li><li>Hulk</li><li>Thor</li><li>Vision</li>";