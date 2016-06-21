var years=[2008,2009,2010,2011,2012,2014,2015]
var weeks=[1,2,3,4,5,6,7.8,9,10,11,12,13,14,15,16,17]
var year = years[Math.floor(Math.random()*years.length)];
var week = weeks[Math.floor(Math.random()*weeks.length)];

var awayTeam;
var awayScore;
var homeTeam ;
var homeScore;


$.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://api.fantasydata.net/nfl/v2/JSON/ScoresByWeek/"+year+"/"+week,

    beforeSend: function(xhrObj){
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","50051a8f21614727b9383fca4f8f7443");
        xhrObj.setRequestHeader("X-Requested-With","text/html")
    },
    method: "GET"
})
.done(function(data) {
  getMatchup(pickGame(data))
})
.fail(function(error,error2,error3) {

    alert("error");
});

function pickGame(data){
  return data[Math.floor(Math.random()*data.length)];
   }

function getMatchup(game){
 awayTeam = game.AwayTeam;
 awayScore = game.AwayScore;

 homeTeam = game.HomeTeam;
 homeScore=game.HomeScore;

 appendMatchup();


}

function appendMatchup(){
  var pageHomeTeam=$('.hName')
  pageHomeTeam.html(homeTeam)

  var pageAwayTeam=$('.aName')
  pageAwayTeam.html(awayTeam)
}
