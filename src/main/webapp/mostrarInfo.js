const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Preguntar al usuario su nombre
rl.question('Ingresa tu nombre: ', (nombre) => {
  // Preguntar al usuario su edad
  rl.question('Ingresa tu edad: ', (edad) => {
    // Imprimir la información en pantalla
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad}`);

    // Cerrar la interfaz de línea de comandos
    rl.close();
  });
});
