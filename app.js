const tareas = require("./funcionesDeTareas");
const listar = require("./listarTareas");

const listarUndefined       = require ("./listarUndefined");
const listarTareasFiltradas = require("./listarTareasFiltradas");
const listarIngresoNoValido = require ("./listarIngresoNoValido");
const guardarTarea = require("./nuevaTarea");

// const listarTerminadas      = require("./listarTerminadas");
// const listarPendientes      = require("./listarPendientes");
// const listarEnProgreso      = require("./listarEnProgreso");

const accion = process.argv[2];
const accion2 = process.argv[3];

switch (accion) {
    case "listar":
        listar();
        break;
    case "filtrar":
        listarTareasFiltradas(accion2);
        break;
    case "guardar":
        guardarTarea(process.argv);
        break;
    case undefined:
        listarUndefined();
        break;
    default:
        listarIngresoNoValido();
        break;
}