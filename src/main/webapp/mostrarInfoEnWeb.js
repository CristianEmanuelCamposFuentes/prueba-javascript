function mostrarInformacion() {
    // Obtener el valor del nombre y edad
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    // Construir el mensaje
    let mensaje = "Nombre: " + nombre + "<br>Edad: " + edad;

    // Mostrar el mensaje en el div
    document.getElementById("resultado").innerHTML = mensaje;
}