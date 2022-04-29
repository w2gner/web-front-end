function login() {
    event.preventDefault();
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    var data = fetch("http://127.0.0.1:3000/heroes?name=Batman", {
        mode: 'no-cors'
    })
        .then(response => {
            return response
        }).then(data => {
            console.log(data)
            return data.body
        });
}