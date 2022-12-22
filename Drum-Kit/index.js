
var instruments_list = ["tom-1", "tom-2", "tom-3", "tom-4", "snare", "crash", "kick-bass"];
var keys = ["w", "a", "s", "d", "j", "k", "l"];

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonPressed = this.innerHTML;
        playInstrument(buttonPressed);
        buttonAnimation(buttonPressed)
    });
}

document.addEventListener("keypress", function (event) {
    playInstrument(event.key)
    buttonAnimation(event.key)
});

function playInstrument(letter) {
    if (keys.includes(letter)) {
        var keyIndex = keys.indexOf(letter)
    } else {
        alert("Remember to press the corresponding key to each instrument 😉")
    }
    var instrument = new Audio("sounds/" + instruments_list[keyIndex] + ".mp3");
    instrument.play();
}

function buttonAnimation(letter) {
    var activeButton = document.querySelector("." + letter)
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)
}


// // Another option wth Switch
// function makeSound(key) {
//     switch (key) {
//         case "w":
//             var tom1 = new Audio("sounds/tom-1.mp3");
//             tom1.play();
//             break;
//         // Repeat the same case for each keyboard letter

//         default:
//             break;
//     }
// }

