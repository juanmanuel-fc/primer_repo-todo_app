const fs = require("fs");
const tareas = require("./funcionesDeTareas");

function listarPendientes () {

    tareas.filter ( (tarea, i) => {

        if (tarea.estado == "Pendiente") {
            console.log ("Tarea#",i+1, "||", "Titulo:",tarea.titulo, "|", "Estado:",tarea.estado)
        };

    } )
}

module.exports = listarPendientes;