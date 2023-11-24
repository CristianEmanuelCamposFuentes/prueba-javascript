function fetchData(url) {
    return fetch(url)
        .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    });
}

function fetchAndHandleData() {
    const apiUrl = 'https://swapi.dev/api/people/1';

    fetchData(apiUrl)
        .then(data => {
        document.getElementById('result').innerHTML = 'Resolved: ' + JSON.stringify(data);
    })
        .catch(error => {
        document.getElementById('result').innerHTML = 'Rejected: ' + error.message;
    });
}
