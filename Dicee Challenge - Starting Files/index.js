var players = [];
const player1 = document.getElementById("img1");
const player2 = document.getElementById("img2");
var dice1;
var dice2;

function spinDice() {
    for (i = 1; i < 3; i++) {
        var diceNum = Math.random();
        diceNum = Math.floor(diceNum * 6) + 1;
        players.push(diceNum);
    }
    dice1 = "images/dice" + players[0] + ".png";
    dice2 = "images/dice" + players[1] + ".png";
    player1.setAttribute("src", dice1);
    player2.setAttribute("src", dice2);
    if (dice1 > dice2) {
        document.querySelector("h1").innerHTML = "🏁 Player 1 Wins! "
    } else if (dice2 > dice1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🏁"
    } else {
        document.querySelector("h1").innerHTML = "Draw!"
    }

}

location.reload = spinDice(); 