//referencia
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// escuchadora

addButton.addEventListener('click', createTask);

//funcion manejadora

function createTask () {
    if (taskInput.value) {
        console.log(taskInput.value);

        /* creamos el contenedor de una tarea */
        const taskItem = document.createElement('div');
        taskItem.classList.add('task')

        /* creamos el parrafo de la tarea */
        const taskText = document.createElement('p')
        taskText.innerText = taskInput.value;

        /* creamos el contenedor de los iconos */
        const taskIcon = document.createElement('div');
        taskIcon.classList.add('task-icon');

        /* creamos el icono de check */
        const checkIcon = document.createElement('i');
        checkIcon.classList.add('bi', 'bi-check', 'icon-complete');

        /* ceamos el icono de delate */
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('bi', 'bi-trash', 'icon-delete');

        /* estructura de los elementos  */
        taskIcon.append(checkIcon, deleteIcon);
        taskItem.append(taskText, taskIcon);
        taskList.append(taskItem);

        /* escuchadores de los iconos */
        checkIcon.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.classList.toggle('complete')
        });

        /* escuchador al elemento deleteIcon */
        deleteIcon.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.remove();
        })

        /* hacer que cuando el usuario de enter se agreger una tarea y que funcione de manera global */
        

        /* regresamos el valor al input */
        taskInput.value = '';
        } else {
            alert('Escribe una tarea');
        }

}

taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        createTask();
    }
})
