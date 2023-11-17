// Crear un objeto Date
let fechaActual = new Date();

// Obtener componentes de la fecha
let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();  // Ten en cuenta que los meses comienzan desde 0
let dia = fechaActual.getDate();

console.log("Fecha actual:", dia + "/" + (mes + 1) + "/" + anio);
