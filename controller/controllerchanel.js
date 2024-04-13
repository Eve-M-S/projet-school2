"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function newchanel(req, res) {
    var _a = req.body, chanelname = _a.chanelname, chaneltype = _a.chaneltype;
    //console.log('sujet: ', chanelname, 'type: ', chaneltype);
    var connection = require('../database/functionDB');
    var sql = 'INSERT INTO chanel (chanel_name, chanel_type ) VALUES (?, ?)';
    connection.query(sql, [chanelname, chaneltype], function (error, results) {
        if (error) {
            console.error("Erreur lors de la création du canal", error);
            res.status(500).send("Erreur lors de la création du canal");
            return;
        }
        else {
            res.status(200).send("Canal créé avec succès");
        }
    });
}
exports.default = newchanel;
module.exports = newchanel;
