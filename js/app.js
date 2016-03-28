
console.log("App.js is running!");

$(document).on('ready', function() {



  // check to make sure JS is loaded
  console.log('JS is READY!');


function firstPlayerMove() {
  $(window).on('keyup', function(event) {
       var player1 = $("#player1");
       var right = 65;


      if (event.keyCode === right) {
           player1.animate({left:"+=20"}, 5);
       }

  });

}
function secondPlayerMove() {
  $(window).on('keyup', function(event) {
       var player2 = $("#player2");
       var right = 76;


      if (event.keyCode === right) {
           player2.animate({left:"+=20"}, 5);

       }

  });
}

function getWinner() {

  if(player1.css('left') === '920px') {
    alert("player one wins!");
  } else if (player2.css('left') === '920px') {
    alert("player two wins!");
  }

  getWinner();
}

$('#reset').on("click" , function resetGame(e){
    player1.animate ({
      'left': '0px'
    });
    player2.animate({
      'left': '0px'
    });

    resetGame();
  });

// $('#reset').on("click" , function resetGame(e){
// playerOne.animate ({
//   'left': '0px'
// });
// playerTwo.animate({
//   'left': '0px'
// } ,0 );

// function getWinner() {
//   if (player1.width >= "=1000px") {
//     alert('1 wins');
//   } else if (player2.width >= "=1000px") {
//     alert('2 wins');
//   } else {
//
//   }
// }


firstPlayerMove();
secondPlayerMove();

});
