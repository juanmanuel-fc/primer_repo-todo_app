const fs = require("fs");

const tareas = JSON.parse (fs.readFileSync("./tareas.json", "utf8")) ;

module.exports = tareas;