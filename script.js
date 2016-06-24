
var homeButton = $('.homeButton')
var awayButton = $('.awayButton')
var awayTeam;
var awayScore;
var homeTeam ;
var homeScore;
var game;


var money=2000;
var highScoreVal=money;
var winStreakVal=0
var pickRightButton=0

$('.money').html("$"+money);
$('.highScore').html('$'+money)
$('.winStreak').html(0)


// newMatchup()

function winStreakUp(){
  winStreakVal+=1
  $('.winStreak').html(winStreakVal);
}
function winStreakDown(){
  $('.winStreak').html(0);
}


function deny(){

}

function highScore(){
  if(money>highScoreVal){
      highScoreVal=money;
      $('.highScore').html('$'+money)
  }
}

$('.nextMatch').click(function(){
  if (pickRightButton===1){
  // newMatchup()
  money=$('.total').html();
  $('.money').html("$"+money)
  $('.total').html("");
  $('.wager').val("");
  $('.hScore').html("");
  $('.aScore').html("");
  $('.winOrLose').html("");
  highScore()
  pickRightButton=0
}else{
  alert("Please select a team")
}
})

function newMatchup(){
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
    pickGame(data);
    getMatchup(game);
    appendMatchup();
    appendGameInfo();
  })
  .fail(function() {
      alert("error");
  });
}

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
        $('.away').css("background-image",`url(${teamLogo[key]})`);
      }
  }
}

function appendGameInfo(){
$('.year').html(game.Season)
$('.week').html(game.Week)
$('.spread').html(game.PointSpread)
$('.over').html(game.OverUnder)
$('.hMoney').html(game.HomeTeamMoneyLine)
$('.aMoney').html(game.AwayTeamMoneyLine)
}

function appendOutcome(){
  $('.aScore').html(game.AwayScore)
  $('.hScore').html(game.HomeScore)
}

homeButton.click(function(){
  if (Number($('.wager').val())>Number(money)){
    alert("Nice Try Wise guy")
}else{
  if(pickRightButton===0){
  var wage= $('.wager').val();
  $('.total').html(Number(money)+Number(wage));
  winStreakUp()
  pickRightButton=1
}else{
  alert("please generate new match")
}
}
});


  // appendOutcome()
  // if(awayScore<homeScore){
  //   $('.winOrLose').html("You're a Baller You WON!!!!")
  // }else{
  //   $('.winOrLose').html("You Stink Try Again!!!!")
  // }


awayButton.click(function(){
  if (Number($('.wager').val())>Number(money)){
    alert("Nice Try Wise guy")
}else{
  if(pickRightButton===0){
  var wage= $('.wager').val();
  $('.total').html(money-wage);
  winStreakDown()
  pickRightButton=1
}else{
  alert("please generate new match")
}
}
});
  // appendOutcome()
  // if(awayScore<homeScore){
  //   $('.winOrLose').html("You Stink Try Again!!!!")
  // }else{
  //   $('.winOrLose').html("You're a Baller You WON!!!!")
  // }

function winner(){

}
