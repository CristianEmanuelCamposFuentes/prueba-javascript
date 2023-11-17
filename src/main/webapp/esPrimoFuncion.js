// Función para verificar si un número es primo
function esPrimo(numero) {
    // Los números menores o iguales a 1 no son primos
    if (numero <= 1) {
        return false;
    }

    // Verificar la divisibilidad del número por otros números
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            // Si es divisible por algún número diferente de 1 y sí mismo, no es primo
            return false;
        }
    }

    // Si no se encontraron divisores, es primo
    return true;
}

// Ejemplos de uso
let numero1 = 7;
let numero2 = 12;

console.log(numero1 + (esPrimo(numero1) ? " es primo." : " no es primo."));
console.log(numero2 + (esPrimo(numero2) ? " es primo." : " no es primo."));
