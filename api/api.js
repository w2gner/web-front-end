function teste(){
    var select = document.getElementsByClassName("marca")
    const url = "https://parallelum.com.br/fipe/api/v1/carros/marcas"
    var request = fetch(url)
    var data = request.then(function(response){
        return response.json()
    })
    
    data.then(function(dado){
        console.log(dado)
        for(i =0; i< dado.length; i++){
            var marca = dado[i].nome
            select.append(marca)
        }
    })
}
