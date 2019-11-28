const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello');
});


app.get('/test', function (req, res) {

    if (0 != 1) {
        console.log('0! = 1 :');
    }
    res.send('Hello');
});

module.exports = app;
