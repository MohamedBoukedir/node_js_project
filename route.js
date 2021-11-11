const express = require('express');
const router = express.Router();

const requestHandlers = require("./requestHandlers.js");
const User = require("./model.js");

var session;
var user = null;
router
    .get('/', (req, res) => {
        requestHandlers.login(user, req, res);
    })
    .get("/show", (req, res) => {
        requestHandlers.show(user, req, res);
    })
    .get("/login", (req, res) => {
        requestHandlers.login(req, res);
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
    .post('/login', (req, res, next) => {
        User.find({})
            .then((users) => {
                for (var i = 0; i < users.length; i++) {
                    if (users[i].username == req.body.username && users[i].password == req.body.password) user = users[i];
                }
                if (user == null) {
                    res.send('Invalid username or password');
                } else {
                    session = req.session;
                    session.userid = req.body.username;
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.redirect(200, '/');
                    res.end();
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post('/signin', (req, res, next) => {
        console.log(req.body);
        User.create(req.body)
            .then((user) => {
                console.log('user Created ', user);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end();
            }, (err) => next(err))
            .catch((err) => next(err));

    }).put("/upload", (req, res) => {
        user.files.push(req.body.file);
        User.findByIdAndUpdate(user._id, {
            $set: { files: user.files },
        }, { new: true }).then(() => {
            res.send("yes");
            res.end();
        });
    });
    module.exports = router;

