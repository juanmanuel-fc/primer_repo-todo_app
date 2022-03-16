const tareas = require("./funcionesDeTareas");
const listar = require("./listarTareas");
const listarTerminadas      = require("./listarTerminadas");
const listarPendientes      = require("./listarPendientes");
const listarEnProgreso      = require("./listarEnProgreso");
const listarUndefined       = require ("./listarUndefined");
const listarIngresoNoValido = require ("./listarIngresoNoValido");

const accion = process.argv[2];

switch (accion) {
    case "listar":
        listar();
        break;
    case "terminada":
        listarTerminadas();
        break;
    case "pendiente":
        listarPendientes();
        break;
    case "enProgreso":
        listarEnProgreso();
        break;
    case undefined:
        listarUndefined();
        break;
    default:
        listarIngresoNoValido();
        break;
}