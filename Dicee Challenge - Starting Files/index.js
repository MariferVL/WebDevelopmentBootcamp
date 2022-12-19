function spinDice() {
    for (i = 1; i < 3; i++) {
        var diceNum = Math.random();
        diceNum = Math.floor(diceNum * 6);
        console.log(diceNum);
        document.getElementsByClassName("img" + i).src = "/images/dice${diceNum}.png";
        }
}

document.onload = spinDice();