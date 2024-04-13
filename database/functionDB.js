var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'eve',
    database: 'myIRC'
});
connection.connect();
connection.query('SELECT * from user', function (error, results) {
    if (error)
        throw error;
    // console.log('resultat de la bd', results);
    //je peux faire d'autre requete sql
});
module.exports = connection;
