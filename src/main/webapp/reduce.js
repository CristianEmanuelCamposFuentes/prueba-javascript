// Ejemplo de reduce: Sumar todos los elementos de un array
const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log("Original:", numeros);
console.log("Suma:", suma);
