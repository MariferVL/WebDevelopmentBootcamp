var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userAnswers = [];
var level = 1;
var gameOn = false;


$(document).ready(function() {
  $(":button").prop("disabled",true);
});

// Start Game
// Show Count Down Img ✔️
$(document).keypress(function () {
  $(":button").prop("disabled",false);
  $("#level").text("");
  $("#actionCall").text("");
  $("img").remove()
  $(".container").append("<img class='count-down' src='images/count-down2.gif' alt='count-down-img'>");
  if (!gameOn) {
    setTimeout(function () {
      getColor();
    }, 6000);
    gameOn = true;
  }
});

// Detect User answer
$(".btn").click(function () {

  var btnClicked = $(this).attr("id");
  userAnswers.push(btnClicked);
  animateClick(btnClicked);
  playSound(btnClicked);
  checkAnswer(userAnswers.length - 1);
});


function checkAnswer(answers) {

  if (gamePattern[answers] === userAnswers[answers]) {
    if (userAnswers.length === gamePattern.length) {
      setTimeout(function () {
        getColor();
      }, 1111);
    }
  } else {
    playSound("wrong");
    $(":button").prop("disabled",true);
    $("body").addClass("gameOver");
    $("#level").text("Game Over");
    $("#actionCall").text("Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("gameOver");
    }, 222);

    startOver();
  }
}

function getColor() {
  $("img").remove()
  userAnswers = [];
  $("#level").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColour = buttonColours[randomNumber];
  gamePattern.push(randomColour);
  $("#" + randomColour).fadeIn().fadeOut().fadeIn();
  playSound(randomColour);
  level++;

}

function animateClick(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 111);
}

function playSound(name) {
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

function startOver() {
  level = 1;
  gamePattern = [];
  gameOn = false;
}
