const fs = require("fs");
const tareas = require("./funcionesDeTareas");


function listarTareas () {

    tareas.forEach ( (tarea, i) => {
        console.log("Tarea#",i+1, "||", "Titulo:",tarea.titulo, "|", "Estado:",tarea.estado);
    } )

}

module.exports = listarTareas;