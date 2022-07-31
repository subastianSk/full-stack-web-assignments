const auth = require("./auth"),
    MustLoginMW = auth.MustLoggedinMiddleware;

const books = [{
        "author": "Robert Martin",
        "country": "USA",
        "language": "English",
        "pages": 209,
        "title": "Clean Code",
        "year": 2008
    },
    {
        "author": "Dave Thomas & Andy Hunt",
        "country": "USA",
        "language": "English",
        "pages": 784,
        "title": "The Pragmatic Programmer",
        "year": 1999
    },
    {
        "author": "Kathy Sierra, Bert Bates",
        "country": "USA",
        "language": "English",
        "pages": 928,
        "title": "Head First Java",
        "year": 2003
    },
];

app.get("/books", MustLoginMW, (req, res) => {
    res.send(books);
});

app.post("/books", MustLoginMW, (req, res) => {

    const {
        role
    } = req.user;

    if (role !== "admin") {
        return res.status(403).send({
            message: "you are not admin"
        });
    }

    const book = req.body;
    books.push(book);

    res.send("Book added successfully");
});