const express = require('express');
const router = express.Router();

const requestHandlers = require("./requestHandlers.js");
const test = [
    {
        username: "ahmed",
        password: "123",
        files: ["upload1", "upload2", "upload3"],
    },
    {
        username: "ahmed",
        password: "12345",
        files: ["upload11", "upload22", "upload33"],
    }
]
var session;
router
    .get('/', (req, res) => {
        session = req.session;
        requestHandlers.login(req, res);
    })
    .get("/show", (req, res) => {
        requestHandlers.show(req, res);
    })
    .get("/login", (req, res) => {
        requestHandlers.login(req, res);
    })
    .get("/signin", (req, res) => {
        requestHandlers.signin(req, res);
    })
    .get("/find", (req, res) => {
        requestHandlers.find(req, res);
    })
    .get('/upload', (req, res) => {
        requestHandlers.upload(req, res);
    })
    .get('/logout', (req, res) => {
        requestHandlers.logout(req, res);
    })
    .post('/login', (req, res) => {
        console.log(req.body);
        if (req.body.username == test[0].username && req.body.password == test[0].password) {
            session = req.session;
            session.userid = req.body.username;
            res.redirect(200,'/');
        }
        else {
            res.send('Invalid username or password');
        }
        res.end();
    })
module.exports = router;

