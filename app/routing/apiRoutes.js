var friends = require("../data/friends");
var userSurvey = [];
var minScore = 500;
var totalScore = 0;
var match;


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.JSON(friends);
    });

    app.post("/api/friends", function (req, res) {
        userSurvey = req.body.scores;
        for (var i = 0; i < friends.length; i++) {
            totalScore = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                var score = Math.abs(userSurvey[i] - friends[i].scores[j]);
                totalScore += score;
            }
            if (totalScore < minScore) {
                minScore = totalScore;
                match = friends[i].name;
            }
        }
        alert("Your match is " + match + "!");
    });

};