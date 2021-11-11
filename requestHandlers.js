
const fs = require('fs');

function login(req,res) {
    var session = req.session;
    if (session.userid) {
        res.render(__dirname + '/public/show.ejs', { name: session.userid });
        res.end();
    } else {
        fs.createReadStream('./public/log_in.ejs').pipe(res);
    }
}
function signin(req, res) {
    fs.readFile('./public/log_in.html', null, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write("file not found");
        } else {
            res.write(data);
        }
        res.end();
    });
}
function show(users, req, res) {
    var session = req.session;
    if (session.userid) {
        res.render(__dirname + '/public/show.ejs', { name: session.userid });
        res.end();
    } else {
        fs.createReadStream('./public/log_in.ejs').pipe(res);
    }
    return (null);
}
function upload(req, res) {
    var session = req.session;
    if (session.userid) {
        res.render(__dirname + '/public/upload.ejs', { name: "ahmed" });
        res.end();
        return (session);
    } else {
        fs.createReadStream('./public/log_in.ejs').pipe(res);
    }

}
function find(req, res) {
    var session = req.session;
    if (session.userid) {
        res.render(__dirname + '/public/find.ejs', { name: "ahmed" });
        res.end();
        return (session);
    } else {
        fs.createReadStream('./public/log_in.ejs').pipe(res);
    }
}
function logout(req, res) {
    var session = req.session;
    if (session.userid) {
        req.session.destroy();
        res.redirect('/');
        res.end();
        return (session);
    } else {
        fs.createReadStream('./public/log_in.ejs').pipe(res);
    }
}
exports.logout = logout;
exports.login = login;
exports.signin = signin;
exports.show = show;
exports.find = find;
exports.upload = upload;