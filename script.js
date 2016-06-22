var years=[2008,2009,2010,2011,2012,2014,2015]
var weeks=[1,2,3,4,5,6,7.8,9,10,11,12,13,14,15,16,17]
var year = years[Math.floor(Math.random()*years.length)];
var week = weeks[Math.floor(Math.random()*weeks.length)];
var homeButton = $('.homeButton')
var awayButton = $('.awayButton')

var awayTeam;
var awayScore;
var homeTeam ;
var homeScore;
var game;


$.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://api.fantasydata.net/nfl/v2/JSON/ScoresByWeek/"+year+"/"+week,

    beforeSend: function(xhrObj){
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","50051a8f21614727b9383fca4f8f7443");
        xhrObj.setRequestHeader("X-Requested-With","text/html")
    },
    method: "GET"
})

.done(function(data) {
  pickGame(data);
  getMatchup(game);
  appendMatchup();
  getWinner()

})

.fail(function() {
    alert("error");
});

function pickGame(data){
  game = data[Math.floor(Math.random()*data.length)];
}

function getMatchup(game){
 awayTeam = game.AwayTeam;
 awayScore = game.AwayScore;

 homeTeam = game.HomeTeam;
 homeScore=game.HomeScore;
}

function appendMatchup(){
  var pageHomeTeam=$('.hName')
  pageHomeTeam.html(homeTeam)

  var pageAwayTeam=$('.aName')
  pageAwayTeam.html(awayTeam)

  for (var key in teamLogo) {
      if(homeTeam===key){
        $('.home').css("background-image",`url(${teamLogo[key]})`);
      }
  }
  for (var key in teamLogo) {
      if(awayTeam===key){
        console.log();
        $('.away').css("background-image",`url(${teamLogo[key]})`);
      }
  }
}

function getWinner(){
  console.log(homeTeam);
  console.log(homeScore);

  console.log(awayTeam);
  console.log(awayScore);

}

homeButton.click(function(){
  if(awayScore<homeScore){
    alert("You're a baller you won!")
  }else{
    alert ("You're an idiot try again")
  }
});

awayButton.click(function(){
  if(awayScore<homeScore){
    alert("You're an idiot try again")
  }else{
    alert ("You're a baller you won!")
  }
});
