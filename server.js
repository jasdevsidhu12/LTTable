'use strict'
const express = require('express');
const port = 8000;
 //App
const app = express();
app.use(express.static('dist'));
app.use(express.static('public'));
app.get('/', function(req, res) {
     res.redirect('/app.html');
 });

 app.listen(port);
 console.log('Running on http://localhost:' + port);