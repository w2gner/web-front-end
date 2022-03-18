onload = ()=>{
    const select = document.querySelector("#select_marca")

    const url = "https://parallelum.com.br/fipe/api/v1/carros/marcas"
    var request = fetch(url)
    var data = request.then(function (response) {
        return response.json()
    })

    data.then(function (dados) {
        console.log(dados)
        select.innerHTML = ""
        // for (i = 0; i < dado.length; i++) {
        //     const option = document.createElement("option")
        //     option.text = dado[i].nome
        //     option.value = dado[i].codigo
        //     select.appendChild(option)
        // }
        for(const dado of dados){
            const option = document.createElement("option")
            option.text = dado.nome
            option.value = dado.codigo
            select.appendChild(option)
        }
    })
}