var gamePattern = [];
gamePattern.push(randomChosenColour);
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColors[getRandomInt(4)];
var randomButton = "#" + randomChosenColour
// var element_clicked

function getRandomInt(max) {
  var randomNumber = Math.floor(Math.random() * max);
  return randomNumber;
}

// // Show Count Down Img ✔️
// $(document).on("keypress", function () {
//   $(".container").append("<img class='count-down' src='images/count-down2.gif' alt='count-down-img'>");
// })

// const myTimeout = setTimeout(get_button, 7000);


// Show  enlighted button randomly ✔️
function get_button() {
  $("img").remove()
  $(document).ready(() => {
    const lheight = $(randomButton).height();
    $(randomButton).fadeIn().fadeOut().fadeIn();

    // The following code keeps the height of the div intact
    if ($(randomButton).height() !== 0) {
      $(randomButton).css('height', `${lheight}px`);
    }
  });
  checkAnswer(randomButton);
}

// TODO Chequear la lógica: cant clicks = gamePattern.length  
//          c/click se debe chequear con lista reversa.
//          si uno erroneo , avisar y empezar
//          si cumple  con todo sgte Level



function checkAnswer(element) {
  $(document).ready(() => {
    $(".btn").click(function () {
      console.log($(element));
      $(element).removeClass(getClass).addClass("btn pressed");
      [...gamePattern].reverse().forEach(item => {   
        console.log(item); // 👉️ c, b, a
        if ($(element).hasClass(item)) {
          console.log("RIGTH! 🎉")
    
        } else {
          console.log("Wrong! :( ")
          get_button()
    
        }
      });
      // .delay(3000).removeClass("pressed")
    });
  });
}

get_button();




// Previuos work:
// function get_button() {
//   $("img").remove()
//   $(randomButton).removeClass(randomChosenColour);
//   return randomButton;
// }

// const waitNext = setTimeout(detectButton, 2000);

// // TODO  revisar cambio color
// function detectButton() {
//   $(randomButton).addClass(randomChosenColour);
//   $(".btn").click(function () {
//     var getClass = this.className;
//     console.log(getClass);
//     var element = $("." + getClass);
//     console.log(elemet);
//     element.removeClass(getClass).addClass("btn pressed");
//     // .delay(3000).removeClass("pressed")
//   })


// }
