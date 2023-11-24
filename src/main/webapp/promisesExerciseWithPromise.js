function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate a random condition, here using a random number
            const randomCondition = Math.random() > 0.5;

            if (randomCondition) {
                // Resolve the promise with mock data
                resolve({ data: "Mock data from the server" });
            } else {
                // Reject the promise with a mock error
                reject({ error: "Error: Unable to fetch data from the server" });
            }
        }, 2000); // Simulate a 2-second delay
    });
}

// Seteo la funcion con la que voy a trabajar los resultados
function fetchAndHandleData() {
    const apiUrl = 'https://swapi.dev/api/people/1'; // You can use any URL here

    fetchData(apiUrl)
        .then(data => {
        document.getElementById('result').innerHTML = 'Resolved: ' + JSON.stringify(data);
    })
        .catch(error => {
        document.getElementById('result').innerHTML = 'Rejected: ' + JSON.stringify(error);
    });
}
