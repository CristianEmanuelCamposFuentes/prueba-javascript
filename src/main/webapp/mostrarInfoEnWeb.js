function mostrarInformacion() {
    // Obtener los valores del nombre y la edad
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;

    // Crear una promesa
    var promesa = new Promise(function(resolve, reject) {
        // Simular una operación asincrónica (puedes reemplazar esto con una solicitud Ajax, por ejemplo)
        setTimeout(function() {
            // Verificar si se ingresaron ambos valores
            if (nombre && edad) {
                // Resuelve la promesa con la información
                resolve({ nombre: nombre, edad: edad });
            } else {
                // Rechaza la promesa si falta información
                reject("Por favor, ingresa tanto el nombre como la edad.");
            }
        }, 1000); // Simula una operación asincrónica de 1 segundo
    });

    // Manejar el resultado de la promesa
    promesa.then(function(info) {
        // Éxito: mostrar la información
        document.getElementById("resultado").innerHTML = `Nombre: ${info.nombre}, <br> Edad: ${info.edad}`;
    }).catch(function(error) {
        // Error: mostrar el mensaje de error
        document.getElementById("resultado").innerHTML = `Error: ${error}`;
    });
}
