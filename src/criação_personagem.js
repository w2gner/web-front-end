let callback = function soma(resultado, texto) {
    return resultado + texto.length;
}

function getAlterEgos() {
    var dados = [];
    var alterEgos = new Object();
    fetch('https://akabab.github.io/superhero-api/api/all.json')
        .then((response) => response.json())
        .then((herois) => {
            herois.map(function (heroi) {
                alterEgos.name = heroi.name;
                alterEgos.alterEgos = heroi.biography.alterEgos;
                dados.push(alterEgos)
            });
        })
    return dados;
}

function getFirstAppearance() {
    var firstAppearance = [];
    fetch('https://akabab.github.io/superhero-api/api/all.json')
        .then((response) => response.json())
        .then((herois) => {
            herois.map(function (heroi) {
                if (heroi.biography.publisher == "Marvel Comics") {
                    firstAppearance.push(heroi.biography.firstAppearance);
                }
            });
        })
        .then(() => {
            firstAppearance.reduce(callback);
            return firstAppearance;
        })
}