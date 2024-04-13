"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt = require('bcrypt');
var saltRounds = 12;
// const bodyParser = require('body-parser')
// const axios = require('axios')
var connection = require('../database/functionDB');
function Postregister(req, res) {
    var _a = req.body, username = _a.username, password = _a.password, email = _a.email;
    console.log('le nom est : ' + username, 'le mot de passe est' + password, 'et le mail est' + email);
    var sql = 'INSERT INTO user (pseudo, mdp, email) VALUES (?, ?, ?)';
    console.log(username, password, email);
    if (!username || !password || !email) {
        res.status(400).send('Nom d\'utilisateur, mot de passe et email requis');
    }
    var motdepass = bcrypt.hashSync(password, saltRounds);
    connection.query(sql, [username, motdepass, email], function (error, results) {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
        }
        else {
            res.status(201).redirect("/connection");
        }
    });
}
exports.default = Postregister;
