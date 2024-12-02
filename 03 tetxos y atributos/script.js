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


/* getAtribute

devueleve el valor del atributo del MediaElementAudioSourceNode

    elemento.getAtribute(atributo)
 */

    const enlace = document.getElementsByTagName("a");

    console.log(enlace[0].getAttribute("href"))

    /* 
    RemoveAtribute
    
    remueve el alor del atributo en ele elemento 

        elemento.removeAttribute(atributo)
    */

    console.log(enlace[0].removeAttribute("href"));
    
    /* 
    setAtribte 
    
    asigna un atributo y un valor a un elemento 

        elemento.setAtribute(atributo,valor)

    -sobrescribe un atributo ya escrito
    -crea un nuevo atrivito y su valor 
    */

enlace[0].setAttribute("href", "https://instagram.com");

console.log(enlace[0].getAttribute("href"));

enlace[0].setAttribute("target", "_blank");

console.log(enlace[0].getAttribute("target"));