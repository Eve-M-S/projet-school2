const path = require('path')
const express = require('express');
const app = express(); 
//const axios = require('axios')
const bodyParser = require('body-parser')
const router = express.Router(); 
const port = 3000
const server = require('http').createServer(app);
const io = require('socket.io')(server)

// Import des fonction 
import Postlogin from "./controller/controlerlogin";
import Postregister from "./controller/controllerregister";
import newchanel from "./controller/controllerchanel" 


// Middleware pour parser le corps des requêtes POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json())

app.use(express.static('views'));

//route home/register
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/inscription.html'))
})
app.post('/', Postregister)


// route login
router.get('/connection', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/connect.html'))
})

app.post('/connection', Postlogin)

router.get('/welcome', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/welcome.html'))
})


router.get('/channels', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/channels.html'))
})

// route chanel 
// router.get('/chanel', (req, res) => {
//   res.sendFile(path.join(__dirname + '/views/chanel.html'))
// }) 
// app.post('/chanel', newchanel) 

app.use('/', router)


// Lancer le serveur
app.listen(port, (error) => {
  if(!error) { 
    console.log("Server is Successfully Running,and App is listening on port "+ port) 
  }else {  
    console.log("Error occurred, server can't start", error);   
  } 
});

io.on('connection', (socket) => {
  console.log('un utilisateur est en ligne');
  socket.on('chat message', (msg) => {
    io.emit('chat message',msg); // permet de renvoyer le msg à l'user
    // console.log("Message: "+ msg)
  })
}),

module.exports = router; 



