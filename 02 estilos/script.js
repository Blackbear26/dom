/* 
seleccionar el elemento atravez de su clase
*/

const titulo = document.querySelector(".titulo");

/* 
Mostramos el nodo deleccionado
- Nodod expandido
- NodO abstrtato


algunos navegadores optimizan la representacion de nodos en la consola
*/

console.log(titulo);

/* 
al objeto style accedemos a el usando la notacion de punto (.)

    elemnto.style

resultado es CSS style declaretion. es una lista que representa todas las propiedades de un elemento 

unicamente muestra los valores de los estilos en linea declaramos directamente en el elemento html
*/

console.log(titulo.style)

/* 
propiedades de estilos 

accedemos a las propiedades usando la notacion de punto

    elemneto.style.nombrePropiedad

a diferencia de CCS las propiedades de estilos en JS las escribimos usando el formato camelCase

    CSS -> 

*/

console.log("valores en leinea. color: " + titulo.style.color + " - fondo: " + titulo.style.backgroundColor);

/* 
 mwtodo de propiedad

 Asignar el valor de la propiedad del estilo en el elmento seleccionado

    elemento.style.nombrePropiedad = "valor"

-Es la forma mas directa y legible de asignar propiedades 
-Solo permite asignar proopiedades en camelcase
 */

titulo.style.color = "purple";
titulo.style.backgroundColor = "yellow";

console.log("valores asignados con JS. color: " + titulo.style.color + " - fondo: " + titulo.style.backgroundColor);

/* 
metodo setProperty()

Asignamos una propiedad de estilo al elemento seleccionado 

    elemento.style.setProperty(nombreDeLaPropiedad, valor, important)

-MAs flexible y poderoso
-se escriben en formato kebab-case
-parametro important es opcional

*/

titulo.style.setProperty("color", "darkblue");
titulo.style.setProperty("backgroundColor", "red", "important");
console.log("Asignados con Property. color: " + titulo.style.color + " - fondo: " + titulo.style.backgroundColor);

/* 
eleminar  varolores de propiedades 

usamos el metodo de propiedad y le asignamos una cadena de texto bacia

    elemento.style.nombrePropiedad = ""

esto elimina los valores previamente definidos en JS y en los styles en linea

*/

/* titulo.style.color = ""
titulo.style.backgroundColor = "" */

/* 
metodo removeProprety 
 
elmina la propiedad de stilo

    elemento.style.romeveProprety
    (nombreP¨ropiedad)

 -las propiedades se pasan en formato kebat-case
*/


titulo.style.removeProperty("color");
titulo.style.removeProperty("background-color");
