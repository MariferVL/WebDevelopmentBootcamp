
/* Cap Name:
var name = prompt("What's your name?");

var nameCap =
  name.charAt(0).toUpperCase()
  + name.slice(1).toLowerCase()

alert("Good Morning "+ nameCap +". Enjoy your day as a millionaire 💷💷💷")*/

// Human Age

/* var dogAge = prompt("Write your dog's age: ")

var humanAge = (dogAge - 2) * 4 + 21

alert("Your 🐶 has " + humanAge + " human years! 😯") */
function loveCalculator(){
var your_name = prompt("Enter your name:")
var partner_name = prompt("Enter your lover's name:")
var percent = Math.random()
percent = Math.floor(percent * 100) + 1
var message = alert("Your and " + partner_name + " are " + percent + "% in love 😍💕")
return  message
}

mesagge = loveCalculator();