function login() {
    event.preventDefault();
    let root = "root";
    let rootPassword = "unesc@1234";
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    if (!email || !password) {
        if (!email && !password) {
            let currentPath = window.location.href;
            currentPath.replace("/src/")
            window.location.pathname = '/web-front-end/src/utils/sucesso.html';
        } else if (!email) {
            alert("Informe o email")
        } else {
            alert("Informe a senha")
        }
    }
    else if (email == root && password == rootPassword) {
        document.URL.replace("/utils/sucesso.html");
    }
    else {
        document.URL.replace("/utils/404.html");
    }

}