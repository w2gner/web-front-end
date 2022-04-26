function login() {
    event.preventDefault();
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let url = "127.0.0.1:3000/login?email=" + email + "&password=" + password

    var request = fetch(url, {
        method: "POST"
    })

    //get request to get the token
    var data = request.then(function (response) {
        return response.json()
    })

    console.log(data)
}