var gamePattern = [];
gamePattern.push(randomChosenColour);
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColors[ getRandomInt(4)];
var element_clicked = "#" + randomChosenColour

function getRandomInt(max) {
  var randomNumber = Math.floor(Math.random() * max);
  return randomNumber;
}

// TODO  revisar img
$(document).on("keypress", function () {
  $("<img class='count-down' src='images/count-down2.gif' alt='count-down-img'>").insertBefore(".first row");
  console.log($("img"))
  $("img").delay(10000).remove();
  give_button(); 
})


// show the enlighted button randomly
function give_button() {
  $(element_clicked).removeClass(randomChosenColour).delay( 2000 ).addClass(randomChosenColour);
}


// TODO  revisar cambio color

$(".btn").click(function () {
  var getClass = this.className;
  console.log(getClass);
  var elemet = $("." + getClass)
  console.log(elemet);
  elemet.removeClass(getClass).addClass("btn pressed");
  // .delay(3000).removeClass("pressed")
})


