function colapsable(div) {
    content = div.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

function getWiki() {
    let request = fetch("https://akabab.github.io/superhero-api/api/all.json")
    let heroName = req.query.name;
    let found = false;

    request.then(function (response) {
        if (heroName) {
            return response.json().then(function (data) {
                let hero = data.find(function (hero) {
                    if (hero.name === heroName && !found) {
                        res.json(hero);
                        found = true;
                        request.finally(console.log("Herói encontrado"));
                    }
                });
                if (hero == undefined && !found) {
                    res.status(404).json({
                        error: "Herói não encontrado"
                    });
                }
            });
        }
        else {
            return response.json().then(function (data) {
                res.json(data);
            });
        }
    })
}