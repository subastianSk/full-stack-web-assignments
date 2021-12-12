const express = require("express")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")

const app = express()
const port = 3000

const users = [{
    username: 'terra',
    password: 'password123admin',
    role: 'admin'
}, {
    username: 'dave',
    password: 'password123member',
    role: 'member'
}];

//middleware
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};


function MustLoggedinMiddleware(req, res, next) {
<<<<<<< HEAD:26-Authentication-and-Authorization/soal2/auth.js
    if (req.authenticateJWT()) {
=======
    if (req.authHeader()) {
>>>>>>> 1d8fa6599f092cc0b869efb6631d27a1bf7b0f4d:26-Otentikasi-dan-Otorisasi/soal2/auth.js
        return next();
    }

    res.redirect("/");
};



dotenv.config()
app.use(bodyParser.json())

app.post("/login", (req, res) => {
    const {
        username,
        password
    } = req.body
    const user = users.find(user => {
        return ((user.username === username) && (user.password === password))
    })

    if (user) {
        const token = jwt.sign({
            username: user.username,
            role: user.role
        }, process.env.TOKEN_SECRET)
        res.json({
            token
        })
    } else {
        res.send("Username or password incorrect")
    }
})

app.get("/users", authenticateJWT, (req, res) => {
    res.send(users)
})

app.listen(port, () => {
    console.log("server is listening on port ", port);
});

exports.MustLoggedinMiddleware = MustLoggedinMiddleware;
