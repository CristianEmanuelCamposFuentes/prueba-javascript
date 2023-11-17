// Definición de un objeto
let persona = {
    nombre: "Carlos",
    edad: 30,
    esEstudiante: false,
    saludar: function() {
        console.log("¡Hola, soy " + this.nombre + "!");
    }
};

// Acceso a propiedades y método del objeto
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
persona.saludar();
