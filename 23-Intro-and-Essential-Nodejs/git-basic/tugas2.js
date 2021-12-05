// memanggil modul http di NodeJS
var http = require('http');

// membuat objek server di NodeJS
var server = http.createServer(function (req, res) {
    console.log(req.url);

    // menentukan URL Routing yang diperlukan di NodeJS 
    if (req.url == '/') {
        res.write('Hello world');
        res.end();
    } else if (req.url == '/about') {
        res.write('Welcome to about us page');
        res.end();
    } else if (req.url == '/contact') {
        res.write('Welcome to contact us page');
        res.end();
    } else {
        res.write('Hello world');
        res.end();
    }
});

// menjalankan objek server yang telah diciptakan
server.listen(2020);
console.log('Server is running on port 2020');