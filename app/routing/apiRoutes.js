var friendData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.JSON(friendData);
    });

    app.post("/api/friends", function(req, res) {
        console.log("Received incoming survey results");
    });

};