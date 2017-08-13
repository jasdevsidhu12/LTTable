'use strict'
const express = require('express');
const LTApi = require('./jsonModules/leagueTableAPI.js');
const LTTeams = require('./jsonModules/leagueTableTeams.js');
const port = 8000;
const app = express();

app.use(express.static('static'));

app.get('/api/players/team/:teamID', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(LTTeams[req.params.teamID]));
});

app.get('/api/competitions', function(req, res) {
    console.log('Im here');
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(LTApi.competitions()));
});

app.get('/api/seasons', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(LTApi.seasons()));
});

app.get('/api/standings/season/:seasonID', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    let standings = LTApi.standings();
    standings = standings[req.params.seasonID];
    res.send(JSON.stringify(standings));
});

app.get('/', function(req, res) {
     res.redirect('/app.html');
 });

 LTApi.readAndSetStandingsFiles().then(function() {
     app.listen(port);
    console.log('Running on http://localhost:' + port);
 });
