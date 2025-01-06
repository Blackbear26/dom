/* 
handler funciones

el handler es una funcion que se ejecuta cuando el evento se dispara

hay tres formas de escribir las funciones handler

1.- funcion externa 🛸
2.- funcion anonima 🥷
3.- funcion flecha 🏹

//funcion externa 🛸

esta funcion se escribe por fuera del evento y se pasa como argumento a la propiedad addEventListener

  funcion handler() {
  //codigo a ejecutar
    }

    evento addEventListener
    (tipo evento, handler)

//funcion anonima 🥷

esta funcion se escribe denro del evento y no tiene nombre

    evento addEventListener
    (tipoEvento, function(){//codigo a ejecutar})

//funcion flecha 🏹

esta funcion se escribe denro del evento y no tiene nombre pero es mas concisa

    elemento addEventListener(
    (tipoEvento, () => {//codigo a ejecutar}))

*cuando el codigo que se ejecuta tiene mas de 1 linea se debe escribir entre llaves
*si el codigo que se ejecuta tiene una sola linea se debe escribir sin llaves
*/

//referencia al boton
const externa = document.getElementById("external");
const anonima = document.getElementById("anonima");
const flecha = document.getElementById("flecha");

console.log(anonima);

//funcion externa  🛸
function funcionExterna() {
    console.log("click en el boton external");
}

externa.addEventListener("click", funcionExterna);

//funcion anonima  🥷

anonima.addEventListener("click", function (){
    console.log("click en el boton anonima");
})

//funcion flecha  🏹
flecha.addEventListener("click", funcionFlecha);

function funcionFlecha() {
    console.log("click en el boton flecha");
}