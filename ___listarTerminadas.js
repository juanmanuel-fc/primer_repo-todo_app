const fs = require("fs");
const tareas = require("./funcionesDeTareas");

function listarTerminadas () {

    tareas.filter ( (tarea, i) => {

        if (tarea.estado == "Terminada") {
            console.log ("Tarea#",i+1, "||", "Titulo:",tarea.titulo, "|", "Estado:",tarea.estado)
        };

    } )
}

module.exports = listarTerminadas;