import fetch from 'node-fetch';
import express from 'express';

let app = express();

app.get('/heroes', function (req, res, next) {
    let request = fetch("https://akabab.github.io/superhero-api/api/all.json")
    let heroName = req.query.name;

    request.then(function (response) {
        if (heroName) {
            return response.json().then(function (data) {
                let hero = data.find(function (hero) {
                    return hero.name === heroName;
                });
                if (hero) {
                    res.json(hero);
                    next();
                } else {
                    res.status(404).json({
                        error: "Herói não encontrado"
                    });
                    next();
                }
            });
        }
        else {
            return response.json().then(function (data) {
                res.json(data);
                next();
            });
        }
    })
});

app.get('/occupation', function (req, res, next) {
    let request = fetch("https://akabab.github.io/superhero-api/api/all.json")
    let heroName = req.query.name;

    request.then(function (response) {
        if (heroName) {
            return response.json().then(function (data) {
                let hero = data.find(function (hero) {
                    if (hero.name === heroName) {
                        res.json(hero.work.occupation);
                    }
                });
                if (!hero == undefined) {
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

app.listen(3000, function () {
    console.log('Started listening on port 3000');
});