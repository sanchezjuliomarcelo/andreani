function validateAndLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if (!username || !password) {
        alert("Por favor, completa todos los campos antes de enviar.");
        return;
    }

    var credentials = btoa(username + ":" + password);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Basic " + credentials);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({ userName: username, password: password }),
        redirect: 'follow'
    };

    var apiUrl = "https://apisqa.andreani.com/login";

    fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(result => {
            var tokenDisplay = document.getElementById("tokenDisplay");
            tokenDisplay.innerHTML = "<strong>Token:</strong> " + JSON.stringify(result);
        })
        .catch(error => console.log('error', error));
}
