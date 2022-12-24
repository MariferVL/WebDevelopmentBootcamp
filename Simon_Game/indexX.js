var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomColour = buttonColors[getRandomInt(4)];
gamePattern.push(randomColour);
console.log(gamePattern)
console.log(gamePattern[-1])

var level = 1
// var element_clicked



function getRandomInt(max) {
  var randomNumber = Math.floor(Math.random() * max);
  return randomNumber;
}

// Show Count Down Img ✔️
$(document).on("keypress", function () {
  $(".container").append("<img class='count-down' src='images/count-down2.gif' alt='count-down-img'>");
})

const myTimeout = setTimeout(get_button, 7000);

// Show  enlighted button randomly ✔️
function get_button() {
  $("img").remove()
  $(document).ready(() => {
    const lheight = $("." + randomColour).height();
    $("." + randomColour).fadeIn().fadeOut().fadeIn();
    // playSound(randomColour)

    // The following code keeps the height of the div intact
    if ($("." + randomColour).height() !== 0) {
      $("." + randomColour).css('height', `${lheight}px`);
    }
  });
  checkAnswer(randomColour);
}


// function playSound(name) {

// }







// TODO Chequear la lógica: cant clicks = gamePattern.length  
//          c/click se debe chequear con lista reversa.
//          si uno erroneo , avisar y empezar
//          si cumple  con todo sgte Level

// TODO  change  $("#level-title"") every level and game over

//Agregar sonido


function checkAnswer(element) {
  $(document).ready(() => {
    console.log($("." + element));
    console.log(gamePattern[-1]);
    $(".btn").click(function () {
      if ($(this).hasClass(element)){
          alert("You pressed the RIGHT button 🎉")
      } else {
        alert("You pressed the Wrong button 😥")

      };
  


      // .delay(3000).removeClass("pressed")
    });
  });
}

// console.log($(element));
// $(element).removeClass(getClass).addClass("btn pressed");
// [...gamePattern].reverse().forEach(item => {   
//   console.log(item); // 👉️ c, b, a
//   if ($(element).hasClass(item)) {
//     console.log("RIGTH! 🎉")

//   } else {
//     console.log("Wrong! :( ")
//     get_button()

//   }


get_button();




// Previuos work:
// function get_button() {
//   $("img").remove()
//   $(randomButton).removeClass(randomColour);
//   return randomButton;
// }

// const waitNext = setTimeout(detectButton, 2000);

// // TODO  revisar cambio color
// function detectButton() {
//   $(randomButton).addClass(randomColour);
//   $(".btn").click(function () {
//     var getClass = this.className;
//     console.log(getClass);
//     var element = $("." + getClass);
//     console.log(elemet);
//     element.removeClass(getClass).addClass("btn pressed");
//     // .delay(3000).removeClass("pressed")
//   })


// }
