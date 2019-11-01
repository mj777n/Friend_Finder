// const nbaMatches = require("../data/playerData");
	

	module.exports = app => {
	  app.get("/api/friends", (req, res) => {
	    res.json(nbaMatches);
	  });
	

	  app.post("/api/friends", (req, res) => {
	    const userArr = req.body.userSurvey;
	    let lowScore = 40; //Highest difference possible
	    let playerMatch;
	

	    //loops through nbaPlayer array, and compares each index in score array to corresponding user index, calculating difference
	    nbaMatches.forEach(player => {
	      const compareArr = player.scores;
	      let diffScore = 0;
	

	      for (let i = 0; i < userArr.length; i++) {
	        let diffTemp = parseInt(userArr[i]) - compareArr[i];
	        if (diffTemp < 0) {
	          diffTemp *= -1;
	        }
	        diffScore += diffTemp;
	      }
	

	      if (diffScore < lowScore) {
	        lowScore = diffScore;
	        playerMatch = player;
	      }
	    });
	

	    const matchScore = parseInt(((40 - lowScore) / 40) * 100);
	    playerMatch.matchPct = matchScore;
	    res.json(playerMatch);
	  });
	};
