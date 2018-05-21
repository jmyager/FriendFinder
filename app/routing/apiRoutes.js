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
        console.log("userSurvey: " + userSurvey);
        console.log("friends: " + friends);
        console.log("friends[0].name: " + friends[0].name);
        console.log("friends[0].scores: " + friends[0].scores);
        for (var i = 0; i < friends.length; i++) {
            totalScore = 0;
            console.log("Checking... " + friends[i].name)
            for (var j = 0; j < friends[i].scores.length; j++) {
                var score = Math.abs(userSurvey[i] - friends[i].scores[j]);
                totalScore += score;
            }
            if (totalScore < minScore) {
                minScore = totalScore;
                match = friends[i].name;
                console.log("minScore was changed with " + friends[i].name);
            }
            console.log(friends[i].name + "'s total score is: " + totalScore);
        }
        console.log("Your match is " + match + "!");
    });

};