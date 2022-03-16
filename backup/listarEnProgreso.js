const fs = require("fs");
const tareas = require("./funcionesDeTareas");

function listarEnProgreso () {

    tareas.filter ( (tarea, i) => {

        if (tarea.estado == "En Progreso") {
            console.log ("Tarea#",i+1, "||", "Titulo:",tarea.titulo, "|", "Estado:",tarea.estado)
        };

    } )
}

module.exports = listarEnProgreso;