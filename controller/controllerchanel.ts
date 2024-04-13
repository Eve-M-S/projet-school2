export default function newchanel(req, res){
    const {chanelname, chaneltype} = req.body;
    //console.log('sujet: ', chanelname, 'type: ', chaneltype);
    
    const connection = require('../database/functionDB')
    const sql = 'INSERT INTO chanel (chanel_name, chanel_type ) VALUES (?, ?)';

    connection.query(sql, [chanelname, chaneltype], (error, results) => {
        if (error) {
            console.error("Erreur lors de la création du canal", error);
            res.status(500).send("Erreur lors de la création du canal");
            return;
        } else {
            res.status(200).send("Canal créé avec succès");
        }
    })
}
module.exports = newchanel;