/* 
//objetos event

el objeto event representa un suceso que ocurre en el davegador, como un click o un evento de teclado y proporciona informqcion sobre las propiedades y metodos para manejarlo

para cceder al objeto event (e) este se pasa automaticamnete como argumento a las funciones manejadoras

sintasis

    function funcionManejadora(event) {
        //codigo a ejecutar...
        comnsole.log(e) //muestra la lista se propiedades y metodos.
    }
key: devuelve el codigo de la tecla presionada
code: devuelve el codigo de la tecla presionada

-clientX devuelve la cordenada del mouse en relacion a la ventana del navegador
clienty: devuelve las cordenadas del mouse en relacion a la ventana del navegador

*/

const button = document.getElementsByClassName('button');
/* console.log(button[0]); */

button[0].addEventListener("click", mostrarObjetoEvento);
function mostrarObjetoEvento(event) {
    //codigo a ejecutar
    console.log(event);
}


document.addEventListener('keydown', function (e) {
    console.log(e);
    console.log(e.type);
    console.log(e.code);
    console.log(e.key);
});

document.addEventListener('mousemove', (e) => {
    /* console.log(e); */
    console.log("cord X: " + e.clientX + "cord Y: " + e.clientY);
});


