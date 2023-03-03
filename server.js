const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('join')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });

app.get('/room', (req, res) => {
    name =  req.query.name
    res.redirect(`/room/${req.query.room}`, )
})

app.get('/room/:room', (req, res) => {
    res.render('room', {roomId: req.params.room, name: name})
})

io.on('connection', (socket) => {
    socket.on('join-room')
})

server.listen(3000)