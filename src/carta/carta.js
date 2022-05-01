var viracartas = [];
var jogador1 = 0;
var jogador2 = 0;
const card1 = document.querySelector("#card")
card1.addEventListener("click", (e) => {
    if (viracartas.length < 2) {
        card1.classList.toggle("flip")
        viracartas.push("card1")
        card1.addEventListener("click", getData(), true)
    }

})
const card2 = document.querySelector("#card2")
card2.addEventListener("click", (e1) => {
    if (viracartas.length < 2) {
        card2.classList.toggle("flip")
        viracartas.push("card2")
        card2.addEventListener("click", getData(), true)
    }

})

const card3 = document.querySelector("#card3")
card3.addEventListener("click", (e2) => {
    if (viracartas.length < 2) {
        card3.classList.toggle("flip")
        card3.addEventListener("click", getData(), true)

    }
})

const card4 = document.querySelector("#card4")
card4.addEventListener("click", (e3) => {
    if (viracartas.length < 2) {
        card4.classList.toggle("flip")
        viracartas.push("card4")
        card4.addEventListener("click", getData(), true)

    }
})

const card5 = document.querySelector("#card5")
card5.addEventListener("click", (e4) => {
    if (viracartas.length < 2) {
        card5.classList.toggle("flip")
        viracartas.push("card5")
        card5.addEventListener("click", getData(), true)

    }
})

function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
function aleatorio() {
    max = 731;
    min = 1;
    var ale = Math.floor(Math.random() * (max) + min)
    return ale
}

function criarnome(herois) {
    nome1 = document.createElement("tr")
    tdnome = document.createElement("td")
    tdnome.innerHTML = herois.name

    nome1.appendChild(tdnome)
    return nome1;
}
function criarinte(herois) {
    inte = document.createElement("tr")
    tdinte = document.createElement("td")
    tdinte.innerHTML = herois.powerstats.intelligence

    inte.appendChild(tdinte)
    return inte;
}
function criarvelocidade(herois) {
    velocidadeHtml = document.createElement("tr")
    tdvelocidadeHtml = document.createElement("td")
    tdvelocidadeHtml.innerHTML = herois.powerstats.speed

    velocidadeHtml.appendChild(tdvelocidadeHtml)
    return velocidadeHtml;
}
function criardurabilidade(herois) {
    dura = document.createElement("tr")
    tddura = document.createElement("td")
    tddura.innerHTML = herois.powerstats.durability

    dura.appendChild(tddura)
    return dura;
}
function criarpoder(herois) {
    power = document.createElement("tr")
    tdpower = document.createElement("td")
    tdpower.innerHTML = herois.powerstats.power

    power.appendChild(tdpower)
    return power;
}
function criarcombate(herois) {
    combat = document.createElement("tr")
    tdcombat = document.createElement("td")
    tdcombat.innerHTML = herois.powerstats.combat

    combat.appendChild(tdcombat)
    return combat;
}

function getData() {
    var meuHeroi = [];
    var cartas = [];

    for (var index = 1; index < 6; index++) {
        meuHeroi = new Object();
        meuHeroi.nome = document.getElementById("nome" + index).lastChild.textContent
        meuHeroi.inteligencia = document.getElementById("int" + index).lastChild.textContent
        meuHeroi.velocidade = document.getElementById("speed" + index).lastChild.textContent
        meuHeroi.durabilidade = document.getElementById("dura" + index).lastChild.textContent
        meuHeroi.poder = document.getElementById("power" + index).lastChild.textContent
        meuHeroi.combate = document.getElementById("combat" + index).lastChild.textContent
        cartas.push(meuHeroi);
    }
    if (viracartas.length === 2) {
        var vencedor1 = [];
        var vencedor2 = [];
        for (let j = 0; j < 6; j++) {

            if ("card" + j === viracartas[0]) {
                jogador1 = parseInt(cartas[j - 1].inteligencia) + parseInt(cartas[j - 1].velocidade) + parseInt(cartas[j - 1].durabilidade) + parseInt(cartas[j - 1].poder) + parseInt(cartas[j - 1].combate);

                vencedor1 = cartas[j - 1].nome;
            }
            if ("card" + j === viracartas[1]) {
                jogador2 = parseInt(cartas[j - 1].inteligencia) + parseInt(cartas[j - 1].velocidade) + parseInt(cartas[j - 1].durabilidade) + parseInt(cartas[j - 1].poder) + parseInt(cartas[j - 1].combate);

                vencedor2 = cartas[j - 1].nome;
            }

        }
    }
    if (jogador1 > jogador2) {
        alert("jogador 1 Venceu " + ' com a carta ' + vencedor1)
    }
    if (jogador2 > jogador1) {
        alert("jogador 2 Venceu " + 'com a carta ' + vencedor2)
    }
}

function main() {

    let data = fazGet("https://akabab.github.io/superhero-api/api/all.json")
    let heroi = JSON.parse(data)

    let nome = [];
    let inteligencia = [];
    let velocidade = [];
    let durabilidade = [];
    let poder = [];
    let combate = [];
    // var heroi = [
    //     nome,
    //     inteligencia,
    //     velocidade,
    //     durabilidade,
    //     poder,
    //     combate
    // ]

    // var meuHeroi = new heroi();
    // var cartas = [];


    for (let i = 1; i < 6; i++) {
        criaHeroi(aleatorio(), i);
    }
    function criaHeroi(n, count) {
        var encontrado = false;
        heroi.forEach(element => {
            if (element.id == n) {
                nome[count] = criarnome(element)
                document.getElementById("nome" + count).appendChild(nome[count])

                inteligencia[count] = criarinte(element)
                document.getElementById("int" + count).appendChild(inteligencia[count])

                velocidade[count] = criarvelocidade(element)
                document.getElementById("speed" + count).appendChild(velocidade[count])

                durabilidade[count] = criardurabilidade(element)
                document.getElementById("dura" + count).appendChild(durabilidade[count])

                poder[count] = criarpoder(element)
                document.getElementById("power" + count).appendChild(poder[count])

                combate[count] = criarcombate(element)
                document.getElementById("combat" + count).appendChild(combate[count])

                encontrado = true;
                return count++;
            }
        });
        if (!encontrado) {
            criaHeroi(aleatorio(), count);
        }
    }
    getData()
}
main()