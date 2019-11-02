var friends = require("../data/friends.js");
	
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
	
  app.post("/api/friends", (req, res) => {
    var totalDiff = 0;
    var match = {
	  name: "",
	  photo:"",
	  friendDiff: 1000
    };

    var user = req.body;
    var userName = user.name;
    var userTotal = user.scores;

    var temp = userTotal.map(function(data) {
      return parseInt(data, 10);
    });
    user = {
	  name:  req.body.name,
	  photo: req.body.photo,
	  scores:temp
	};
    console.log("Name: "+userName);
    console.log("User score: "+userTotal);
    var sum = temp.reduce((a, temp) => a + temp, 0);
    console.log("Total of user's score is "+sum);
    console.log("The Best Match: "+match.friendDiff);
    console.log("**********************************************");
	
	for (var i=0; i<friends.length; i++) {
		console.log(friends[i].name);
		totalDiff = 0;
		console.log("Total Difference is "+totalDiff);
		console.log("In for loop> The Best Match: "+match.friendDiff);	

		var newFriendScore = friends[i].score.reduce((a,temp) =>a + temp, 0);
		console.log("Total friend score is "+newFriendScore);
		totalDiff += Math.abs(sum - newFriendScore);
		console.log("totalDiff -------------> "+totalDiff);

		if (totalDiff <=match.friendDiff) {
			match.name = friends[i].name;
			match.photo = friends[i].photo;
			match.friendDiff = totalDiff;
		}
		console.log("totalDiff is: "+totalDiff);
	}
	console.log(match);
	friends.push(user);
	console.log("New User Added");
	console.log(user);
	res.json(match);
  });
};



	

   //loops through nbaPlayer array, and compares each index in score array to corresponding user index, calculating difference
	//     nbaMatches.forEach(player => {
	//       const compareArr = player.scores;
	// 	  let diffScore = 0;
		  
	//       for (let i = 0; i < userArr.length; i++) {
	//         let diffTemp = parseInt(userArr[i]) - compareArr[i];
	//         if (diffTemp < 0) {
	//           diffTemp *= -1;
	//         }
	//         diffScore += diffTemp;
	//       }
	//       if (diffScore < lowScore) {
	//         lowScore = diffScore;
	//         playerMatch = player;
	//       }
	//     });	
	//     const matchScore = parseInt(((40 - lowScore) / 40) * 100);
	//     playerMatch.matchPct = matchScore;
	//     res.json(playerMatch);
	//   });
	// };
