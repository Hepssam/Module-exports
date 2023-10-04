const team = require("./testCache.js");
console.log(team.getMatch());
team.setMatch("Teammates");
console.log(team.setMatch());

const newTeam = require("./testCache.js");
console.log(newTeam.getMatch);