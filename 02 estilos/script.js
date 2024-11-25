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

console.log("valores en leinea. color: " + titulo.style.color + " - fondo: " + titulo.style.backgroundColor)