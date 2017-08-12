const fs = require('fs');
module.exports = {
    initial: function(path, season) {
        return new Promise(function(resolve) {
            fs.readFile(path, 'utf8', function (err,data) {
            if (err) {  
                return console.log(err);
            }
            resolve(JSON.parse(data));
            });
        });
    },
    readAndSetStandingsFiles: function() {
        const thisObj = this;
        return new Promise(function(resolve){
                thisObj.initial('jsonModules/season350.json').then(function(data) {
                thisObj.seasson350 = data;
                thisObj.initial('jsonModules/season662.json').then(function(data) {
                    thisObj.seasson662 = data;
                    thisObj.initial('jsonModules/season1144.json').then(function(data) {
                        thisObj.seasson1144 = data;
                        resolve(true);
                    });
                });
            });
        });
    },
    competitions: function() {
        return {"data":[{"id":43,"cup":false,"name":"Superliga","active":true},{"id":66,"cup":false,"name":"Premiership","active":true}]}
    },
    seasons: function() {
        return {"data":[{"id":350,"competition_id":43,"name":"2015\/2016","active":true},{"id":662,"competition_id":43,"name":"2016\/2017","active":true},{"id":1144,"competition_id":43,"name":"2017\/2018","active":true},{"id":355,"competition_id":66,"name":"2015\/2016","active":true},{"id":741,"competition_id":66,"name":"2016\/2017","active":true},{"id":1181,"competition_id":66,"name":"2017\/2018","active":true}],"meta":{"pagination":{"total":6,"count":6,"per_page":50,"current_page":1,"total_pages":1,"links":[]}}};
    },
    standings: function(seasonID) {
        return {
            "350": this.seasson350,
            "662": this.seasson662,
            "1144": this.seasson1144
        };
    }
}