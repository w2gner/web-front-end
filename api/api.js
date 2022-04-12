import fetch from 'node-fetch';
import express from 'express';

let app = express();

app.get('/heroes', function (req, res, next) {
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
});

app.get('/occupation', function (req, res, next) {
    let request = fetch("https://akabab.github.io/superhero-api/api/all.json")
    let heroName = req.query.name;
    let found = false;

    request.then(function (response) {
        if (heroName) {
            return response.json().then(function (data) {
                let hero = data.find(function (hero) {
                    if (hero.name === heroName && !found) {
                        res.json(hero.work.occupation);
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
});

app.get('/images', function (req, res, next) {
    let request = fetch("https://akabab.github.io/superhero-api/api/all.json")
    let heroName = req.query.name;
    let found = false;

    request.then(function (data) {
        if (heroName) {
            return data.json().then(function (data) {
                let hero = data.find(function (hero) {
                    if (hero.name === heroName && !found) {
                        res.json(hero.images.lg);
                        found = true;
                        //buscar uma forma de encerrar a promise do request
                        request.finally(console.log("Herói encontrado"));
                    }
                });
                if (hero == undefined && !found) {
                    res.status(404).json({
                        error: "Herói não encontrado"
                    });
                }
            });
        } else if (heroName != undefined) {
            res.status(404).json({
                error: "Herói não encontrado"
            });
        } else {
            res.status(404).json({
                error: "Envie o parâmetro 'name'"
            });
        }
    })
});

app.listen(3000, function () {
    console.log('Started listening on port 3000');
});