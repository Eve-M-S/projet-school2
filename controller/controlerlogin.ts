const bcrypt = require('bcrypt')
const saltRounds = 12;

export default function Postlogin(req, res){
    const {username, password} = req.body;
    console.log(username);
    console.log(password);
  
    const connection = require('../database/functionDB')

    const sql = 'SELECT * FROM user WHERE pseudo = ?';
  
    connection.query(sql, [username], (error, results) => {
      //console.log(results);
      
      if (error) {
        console.error("impossible de trouver l'utlisateur", error);
        res.status(500).send("Erreur");
        return;
      }
      if (results.length > 0) {
        const user = results[0];
        console.log('user trouver est', user);

        const mdpDB = results[0].mdp;
        const match = bcrypt.compareSync(password, mdpDB);
        
        console.log(match)
  
        if ( match ) {
          res.status(200).redirect('/welcome')
          // res.status(201).redirect(`/connection`);
          //.send('Login reussi')

        }else {
          res.status(401).redirect('/connection')
         
          
        }
      } else {
        res.status(404).redirect('/connection')
      } 
    })
}

// res.status(201).redirect(`/connection`);
// module.exports = Postlogin;