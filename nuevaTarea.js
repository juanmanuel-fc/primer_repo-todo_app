const fs = require("fs");

const tareas = JSON.parse (fs.readFileSync("./tareas.json", "utf8")) ;

function guardarTarea (arrayConsola) {

    let nombreTarea = "";
    
    for (let i=3; i<arrayConsola.length; i++) {
        if (i==3) {
            nombreTarea += arrayConsola[i];
        } else {
            nombreTarea += " " + arrayConsola[i];
        }
    }


    let tareaNueva = {
        titulo: nombreTarea,
        estado: "Pendiente"
    }

    tareas.push(tareaNueva);

    let tareasActualizadas = JSON.stringify(tareas);

    fs.writeFileSync("./tareas.json", tareasActualizadas);

}

module.exports = guardarTarea;