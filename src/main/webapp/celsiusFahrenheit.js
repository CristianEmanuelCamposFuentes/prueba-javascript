// Función para convertir de Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Función para procesar las temperaturas
function procesarTemperaturas(temperaturasCelsius) {
    // Mapear el array temperaturasCelsius a temperaturasFahrenheit
    const temperaturasFahrenheit = temperaturasCelsius.map(celsiusToFahrenheit);

    // Imprimir temperaturas originales y convertidas
    console.log("Temperaturas Celsius Originales:", temperaturasCelsius);
    console.log("Temperaturas Fahrenheit Convertidas:", temperaturasFahrenheit);
}

// Ejemplo de temperaturas en Celsius
const temperaturasCelsius = [0, 25, 100, -10, 36.5];

// Llamar a la función para procesar las temperaturas
procesarTemperaturas(temperaturasCelsius);
