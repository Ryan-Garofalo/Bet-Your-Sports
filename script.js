var years=[2008,2009,2010,2011,2012,2014,2015]
var weeks=[1,2,3,4,5,6,7.8,9,10,11,12,13,14,15,16,17]

var year = years[Math.floor(Math.random()*years.length)];
var week = weeks[Math.floor(Math.random()*weeks.length)];

$.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://api.fantasydata.net/nfl/v2/JSON/ScoresByWeek/"+year+"/"+week,

    beforeSend: function(xhrObj){
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","50051a8f21614727b9383fca4f8f7443");
        xhrObj.setRequestHeader("X-Requested-With","text/html")
    },
    method: "GET"
})
.done(function(data) {
  getMatchup(pickGame(data));
})
.fail(function(error,error2,error3) {

    alert("error");
});

function pickGame(data){
  return data[Math.floor(Math.random()*data.length)];
   }

function getMatchup(game){
  console.log(game.AwayTeam);
  console.log(game.AwayScore);

  console.log(game.HomeTeam);
  console.log(game.HomeScore);
  console.log(game);
}
