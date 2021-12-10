const express = require("express");

const app = express();
const port = 3001;


const hewan = [{
        id: 1,
        nama: 'Snowy',
        spesies: 'kucing'
    },
    {
        id: 2,
        nama: 'Blacki',
        spesies: 'anjing'
    },
    {
        id: 3,
        nama: 'Molly',
        spesies: 'kucing'
    },
    {
        id: 4,
        nama: 'Milo',
        spesies: 'kelinci'
    },
    {
        id: 5,
        nama: 'Rere',
        spesies: 'kucing'
    },
]
app.use(express.json());

app.use(function (req, res, next) {
    console.log('this is logger');
    next();
})

app.get("/", (req, res) => {
    res.send("Welcome to pet API");
})

app.get("/hewan", (req, res) => {
    res.send(hewan);
});


app.get('/hewan/:id', (req, res) => {
    const hewanid = Number(req.params.id)
    const getHewan = hewan.find((hewan) => hewan.id === hewanid)

    if (!getHewan) {
        res.status(500).send("Hewan not found")
    } else {
        res.json({
            hewan: [getHewan]
        })
    }
})

app.post("/hewan", (req, res, next) => {
    const allowedSpesies = ["kucing", "anjing", "kelinci"]
    const {
        spesies
    } = req.body;
    if (!allowedSpesies.includes(spesies)) {
        res.status(400).send({
            error: "Spesies not valid"
        });
        return;
    }
    next();
}, (req, res) => {
    const newHewan = {
        id: hewan.length + 1,
        nama: 'zowie',
        spesies: 'kucing'
    };

    hewan.push(newHewan);
    res.send(newHewan);
});


app.post("/hewan", (req, res, next) => {
    const allowedSpesies = ["kucing", "anjing", "kelinci"]
    if (!allowedSpesies.includes(req.body.spesies)) {
        res.status(400).send({
            error: "Spesies not valid"
        });
        return;
    }
    next();
}, (req, res) => {
    const newHewan = {
        id: hewan.length + 1,
        nama: req.body.nama,
        spesies: req.body.spesies
    };

    hewan.push(newHewan);
    res.send(newHewan);
});

app.put("/hewan/:id", (req, res, next) => {
    const hewanid = Number(req.params.id)
    const getHewan = hewan.find((hewan) => hewan.id === hewanid)

    if (!getHewan) {
        res.status(500).send("Hewan not found")
        return;
    }
    next();
}, (req, res) => {
    const currHewan = Number(req.params.id)

    hewan.splice((currHewan - 1), 1)

    const updatedHewan = {
        id: req.params.id,
        nama: req.body.nama,
        spesies: req.body.spesies
    };

    hewan.push(updatedHewan);
    res.send(updatedHewan);
});

app.delete("/hewan/:id", (req, res, next) => {
    const hewanid = Number(req.params.id)
    const getHewan = hewan.find((hewan) => hewan.id === hewanid)

    if (!getHewan) {
        res.status(500).send("Hewan not found")
        return;
    }
    next();
}, (req, res) => {
    const currHewan = Number(req.params.id)

    hewan.splice((currHewan - 1), 1)

    res.status(200).send("Hewan deleted")
})

app.listen(port, () => {
    console.log("server run");
});