var friends = require("../data/friendsData");

  // api/friends will send json data of friends array to browser
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
	res.json(friends);	
  });
	
  app.post("/api/friends", (req, res) => {
    var totalDiff = 0;
    var match = {
	  name: "",
	  photo:"",
	  friendDiff: 40
    };
console.log(req.body);
	var user = req.body;
    var userName = user.name;
    var userTotal = user.results;
console.log("var userTotal = "+userTotal);
    var temp = userTotal.map(function(data) {
      return parseInt(data, 10);
	});
    user = {
	  name:  req.body.name,
	  photo: req.body.photo,
	  results:temp
	};
    console.log("\n"+"The User is: "+userName);
    console.log(userName+"'s score: "+userTotal);
    var sum = temp.reduce((a, temp) => a + temp, 0);
    console.log("Total of "+userName+"'s score is "+sum);
    console.log("The Worst Match(ie. difference) would be: "+match.friendDiff);
    console.log("****************************************"+"\n");
	
	for (var i=0; i<friends.length; i++) {
		console.log("==============================");
		console.log("Comparing with: "+friends[i].name);
		totalDiff = 0;	
		var newFriendScore = friends[i].results.reduce((a,temp) =>a + temp, 0);
		console.log(friends[i].name+"'s "+"total score is: "+newFriendScore);
	// use Absolute Value (abs) to avoid negative numbers	
		totalDiff += Math.abs(sum - newFriendScore);
	// add up the differences in each score by question for each "friend" in Friends	
		if (totalDiff <=match.friendDiff) {
			match.name = friends[i].name;
			match.photo = friends[i].photo;
			match.friendDiff = totalDiff;
		}
		console.log("The difference is -------------> "+totalDiff);
	}
	console.log("\n"+"*** The BEST match is with: "+match.name+"\n");
	friends.push(user);
	console.log("New User Added");
	console.log(user);
	res.json(match);
  });
};

