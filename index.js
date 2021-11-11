const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const router = require("./route.js");
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

//session
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}));
// cookie parser middleware
app.use(cookieParser());
// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use(express.static(__dirname));
app.set('view engine', 'ejs');
//
app.use('/', router);
//
io.on('connection', (socket) => {
    console.log('a user connected');
});
server.listen(3000, () => {
    console.log('listening on *:3000');
}); 
//data base
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017';
const connect = mongoose.connect(url);
connect.then((db) => {
    console.log("Connected correctly to the data base server");
}, (err) => { console.log(err); });
