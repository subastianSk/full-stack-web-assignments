const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const app = express();
const PORT = 3000;


const oneDay = 1000 * 60 * 60 * 24;


app.use(sessions({
    secret: "ahahahahkkaahks",
    saveUninitialized: true,
    cookie: {
        maxAge: oneDay
    },
    resave: false
}));


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));




app.use(cookieParser());


const myusername = 'user1'
const mypassword = 'mypassword'


var session;

// app.use(express.static('views'))
app.use("/static", express.static(__dirname + "/views"))

app.get('/', (req, res) => {
    session = req.session;
    if (session.userid) {
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    } else
        res.sendFile('views/index.html', {
            root: __dirname
        })
});

app.post('/user', (req, res) => {
    if (req.body.username == myusername && req.body.password == mypassword) {
        session = req.session;
        session.userid = req.body.username;
        console.log(req.session)
        res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
    } else {
        res.send('Invalid username or password');
    }
})


app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));