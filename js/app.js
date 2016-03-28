
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

       if (event.keyCode === right && player1.position().left < (racetrack1 * 0.80)) {
       player1.animate({left:"+=20"}, 5);

     } else if (event.keyCode === right && player1.position().left > (racetrack1 * 0.80))  {
           player1.animate({left:"+=20"}, 5);
           $(document).off('keyup');
           alert("player 1 wins!");
}
  });

}

function secondPlayerMove() {
  $(window).on('keyup', function(event) {
       var right = 76;

     if (event.keyCode === right && player1.position().left < (racetrack2)) {
       player2.animate({left:"+=20"}, 5);

     } else if (event.keyCode === right && player2.position().left > (racetrack2)) {
           player2.animate({left:"+=20"}, 5);
           $(document).off('keyup');
           alert("player 2 wins!");
        }

  });
}

// function getWinner() {
//
//   if(player1.position().left === (racetrack1 * 0.80)) {
//     alert("player one wins!");
//   } else if (player2.position().left === (racetrack2 * 0.80)) {
//     alert("player two wins!");
//   }
//
//
// }

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
