/* Variables we need for the game */

var choices = ["rock", "paper", "scissors"];

var played = 0;
var won = 0;
var lost = 0;
var draw = 0;
var play_you;
var play_machine;

/* Listen for the button clicks */
$('.user-turn').click(function(event) {
  play_you = this.getAttribute("value");
  $('#play_you').text(play_you);
  console.log(play_you);
  computer_move();
  compare(play_you, play_machine);
});


// $("#rock").click(function(event) {
// var play_you = 'rock';
// $("#play_you").text(play_you);
// var play_machine = computer_move();
// compare(play_you, play_machine);
// });
//
//
// $("#paper").click(function(event) {
// var play_you = 'paper';
// $("#play_you").text(play_you);
// var play_machine = computer_move();
// compare(play_you, play_machine);
// });
//
// $("#scissors").click(function(event) {
// var play_you = 'scissors';
// $("#play_you").text(play_you);
// var play_machine = computer_move();
// compare(play_you, play_machine);
// });

function computer_move() {
  var random_number = Math.floor(Math.random() * (3 - 0)) + 0;

  play_machine = choices[random_number];
  $("#play_machine").text(play_machine);
  console.log('move: ' + play_machine);
}

function compare(you, machine) {
  var verdict = 'lose';
  if (you == machine) {
    verdict = 'draw';
  }
  if ((you == "rock") && (machine == "scissors")) {
    verdict = 'win';
  }
  if ((you == "paper") && (machine == "rock")) {
    verdict = 'win';
  }
  if ((you == "scissors") && (machine == "paper")) {
    verdict = 'win';
  }

  if ((you == "paper") && (machine == "scissors")) {
    verdict = 'lose';
  }
  if ((you == "scissors") && (machine == "rock")) {
    verdict = 'lose';
  }
  if ((you == "rock") && (machine == "paper")) {
    verdict = 'lose';
  }

  switch (verdict) {
    case 'win':
      won++;
      $("#game_won").text(won);
      break;
    case 'lose':
      lost++;
      $("#game_lost").text(lost);
      break;
    case 'draw':
      draw++;
      $("#game_draw").text(draw);
      break;
  }

  $("#verdict").text(verdict);

  played++;
  $("#game_played").text(played);
}

$('#reset').click(function(event) {
      played = 0;
      won = 0;
      lost = 0;
      draw = 0;
      play_you;
      play_machine;

      $('#play_you').empty();
      $("#play_machine").empty();
      $("#game_played").empty();
      $("#verdict").empty();
      $("#game_won").empty();
      $("#game_lost").empty();
      $("#game_draw").empty();

    })
