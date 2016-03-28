
console.log("App.js is running!");

$(document).on('ready', function() {



  // check to make sure JS is loaded
  console.log('JS is READY!');

  var player1 = $("#player1");
  var player2 = $("#player2");
  var racetrack1 = $(".racetrack1").width();
  var racetrack2 = $(".racetrack2").width();

function firstPlayerMove() {
  $(window).on('keyup', function(event) {
       var right = 65;


      if (event.keyCode === right) {
           player1.animate({left:"+=50"}, 5, getWinner());
       }

  });

}
function secondPlayerMove() {
  $(window).on('keyup', function(event) {
       var right = 76;


      if (event.keyCode === right) {
           player2.animate({left:"+=50"}, 5, getWinner());

       }

  });
}

function getWinner() {

  if(player1.position().left === (racetrack1 * 0.80)) {
    alert("player one wins!");
  } else if (player2.position().left === (racetrack2 * 0.80)) {
    alert("player two wins!");
  }


}

$('#reset').on("click" , function resetGame(){
    player1.animate ({
      'left': '135px'
    });
    player2.animate({
      'left': '135px'
    });

    firstPlayerMove();
    secondPlayerMove();

  });



firstPlayerMove();
secondPlayerMove();

});
