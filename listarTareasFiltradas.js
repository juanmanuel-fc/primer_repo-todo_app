const fs = require("fs");
const tareas = require("./funcionesDeTareas");



function listarFiltradas (estado) {

    if (estado == undefined) {
        console.log ("INGRESE una opcion para filtrar: EnProgreso, Terminada o Pendiente");
    } else {
        tareas.filter ( (tarea, i) => {

            if (tarea.estado == estado) {
                console.log ("Tarea#",i+1, "||", "Titulo:",tarea.titulo, "|", "Estado:",tarea.estado)
            };
    
        } )
    }
    
}

module.exports = listarFiltradas;