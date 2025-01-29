//referencias
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');

// escuchadora

addButton.addEventListener('click', createTask);

//funcion manejadora

function createTask () {
    if (taskInput.value) {
        console.log(taskInput.value);
        taskInput.value = '';
    } else {
        alert('Escribe una tarea');
    }
}