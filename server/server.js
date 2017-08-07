'use strict'
const express = require('express');
const port = 8000;
const app = express();

app.use(express.static('static'));
app.get('/', function(req, res) {
     res.redirect('/app.html');
 });

 app.listen(port);
 console.log('Running on http://localhost:' + port);