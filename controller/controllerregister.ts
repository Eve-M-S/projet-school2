
const bcrypt = require('bcrypt')
const saltRounds = 12;
// const bodyParser = require('body-parser')
// const axios = require('axios')
const connection = require('../database/functionDB')



export default function Postregister(req, res) {
    const {username, password, email} = req.body;
    console.log('le nom est : '+ username, 'le mot de passe est' + password, 'et le mail est' + email);

    const sql = 'INSERT INTO user (pseudo, mdp, email) VALUES (?, ?, ?)';
    console.log(username,password,email)
    if (!username || !password || !email) {
        res.status(400).send('Nom d\'utilisateur, mot de passe et email requis')
    }

    const motdepass = bcrypt.hashSync(password, saltRounds)

    connection.query(sql, [username, motdepass, email], (error, results) => {
      if (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
         
      }else {
        res.status(201).redirect(`/connection`);
      
        
         
      }
    })
}
