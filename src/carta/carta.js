let click = 0;

const card = document.querySelector("#card")
card.addEventListener("click", (e) => {
    console.log("click")
    card.classList.toggle("flip")
    click++;
})
const card1 = document.querySelector("#card2")
card1.addEventListener("click", (e1) => {
    console.log("click")
    card1.classList.toggle("flip2")
    click++;
})
const card3 = document.querySelector("#card3")
card3.addEventListener("click", (e2) => {
    console.log("click")
    card3.classList.toggle("flip3")
    click++;
})
const card4 = document.querySelector("#card4")
card4.addEventListener("click", (e3) => {
    console.log("click")
    card4.classList.toggle("flip4")
    click++;
})
const card5 = document.querySelector("#card5")
card5.addEventListener("click", (e4) => {
    console.log("click")
    card5.classList.toggle("flip5")
    click++;
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
}

main()
