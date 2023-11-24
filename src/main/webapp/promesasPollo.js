let hayPollo;

function elegirDisponibilidad(disponible) {
    hayPollo = disponible;
    tomarPedidoConConsulta();
}

function exitoPreparacion() {
    document.getElementById("resultado").innerHTML = 'Pedido preparado con éxito!';
}

function errorPreparacion() {
    document.getElementById("resultado").innerHTML = 'Hubo un problema al preparar el pedido.';
}

function informarNoPollo() {
    document.getElementById("resultado").innerHTML = 'No hay pollo disponible. Debe elegir entre asado o pizza.';

    // Cambiar el texto y comportamiento de los botones existentes
    let polloButton = document.getElementById("polloButton");
    let noPolloButton = document.getElementById("noPolloButton");

    if (polloButton && noPolloButton) {
        polloButton.innerText = 'Asado';
        polloButton.onclick = function() { elegirAsado(); };

        noPolloButton.innerText = 'Pizza';
        noPolloButton.onclick = function() { elegirPizza(); };
    }
}


function elegirAsado() {
    document.getElementById("resultado").innerHTML = 'Preparando asado...';

    prepararPedido().then(() => {
        exitoPreparacion();
    });
}

function elegirPizza() {
    document.getElementById("resultado").innerHTML = 'Preparando pizza...';

    prepararPedido().then(() => {
        exitoPreparacion();
    });
}

function prepararPedido() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1500);
    });
}

function tomarPedidoConConsulta() {
    document.getElementById("resultado").innerHTML = 'Consultando disponibilidad de pollo...';

    if (hayPollo) {
        consultarDisponibilidadPollo()
            .then(() => {
            return prepararPedido();
        })
            .then(() => {
            exitoPreparacion();
        })
            .catch(() => {
            errorPreparacion();
        });
    } else {
        informarNoPollo();
    }
}

function consultarDisponibilidadPollo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hayPollo = true; // Cambia a true para simular que hay pollo disponible
            if (hayPollo) {
                resolve('Sí, hay pollo disponible.');
            } else {
                reject('Lo siento, no hay pollo disponible.');
            }
        }, 1000);
    });
}

function reiniciarTodo() {
    // Restaurar botones y resultado a su estado inicial
    document.getElementById("polloButton").innerText = 'Sí, hay pollo';
    document.getElementById("polloButton").onclick = function() { elegirDisponibilidad(true); };

    document.getElementById("noPolloButton").innerText = 'No hay pollo';
    document.getElementById("noPolloButton").onclick = function() { elegirDisponibilidad(false); };

    document.getElementById("resultado").innerHTML = '';
    hayPollo = undefined; // Reiniciar la variable de disponibilidad de pollo
}

