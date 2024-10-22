const express = require('express'); 
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));
const fs = require('fs');
const path = require('path'); 
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.json()); 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
let errors = [];
let data = [];
let success = true;

app.get('/', (req, res) => {
    console.log(__dirname);
    res.header('Content-Type', 'text/html; charset=utf8');
    res.status(201).sendFile(__dirname + '/public/index.html');
});

app.get('/gyumolcs', (req, res) => {
    res.header('Content-Type', 'application/json');
    res.json(data);
    res.status(200);
});

app.post('/', (req, res) => {
    res.header('Content-Type', 'text/html; charset=utf8');
    let user = req.body;
    console.log(user);
    if(user.gynev.length < 5) {
        success = false;
        errors.push('A megnevezésnek legalább 5 karakter hosszúnak kell lennie!');
    }
    if(user.gyegysegar <= 1) {
        success = false;
        errors.push('Broooo!');
    }
    if(user.gymennyiseg < 0) {
        success = false;
        errors.push('Naaaaaaaaah!');
    }
    if(success) {
        data.push(user);
        res.status(201).sendFile(__dirname + '/public/index.html')/*({success: true, data: data, errors: errors})*/;
    } else {
        res.status(301).sendFile(__dirname + '/public/index.html')/*({success: false, data: data, errors: errors})*/;
    }
});

app.listen(port, () => {
    console.log(`Express szerver indítva. Port: ${port}`);
});