
console.log("App.js is running!");

$(document).on('ready', function() {



  // check to make sure JS is loaded
  console.log('JS is READY!');


function firstPlayerMove() {
  $(window).on('keyup', function(event1) {
       var player1 = $("#player1");
       var right = 65;


      if (event1.keyCode == right) {
           player1.animate({left:"+=20"},5);
       }
  });

}
function secondPlayerMove() {
  $(window).on('keyup', function(event1) {
       var player2 = $("#player2");
       var right = 76;


      if (event1.keyCode == right) {
           player2.animate({left:"+=20"},5);
       }
  });
}

function getWinner() {


}


firstPlayerMove();
secondPlayerMove();

});
