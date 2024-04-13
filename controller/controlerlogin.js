"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt = require('bcrypt');
var saltRounds = 12;
function Postlogin(req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    console.log(username);
    console.log(password);
    var connection = require('../database/functionDB');
    var sql = 'SELECT * FROM user WHERE pseudo = ?';
    connection.query(sql, [username], function (error, results) {
        //console.log(results);
        if (error) {
            console.error("impossible de trouver l'utlisateur", error);
            res.status(500).send("Erreur");
            return;
        }
        if (results.length > 0) {
            var user = results[0];
            console.log('user trouver est', user);
            var mdpDB = results[0].mdp;
            var match = bcrypt.compareSync(password, mdpDB);
            console.log(match);
            if (match) {
                res.status(200).redirect('/welcome');
                // res.status(201).redirect(`/connection`);
                //.send('Login reussi')
            }
            else {
                res.status(401).redirect('/connection');
            }
        }
        else {
            res.status(404).redirect('/connection');
        }
    });
}
exports.default = Postlogin;
// res.status(201).redirect(`/connection`);
// module.exports = Postlogin;
