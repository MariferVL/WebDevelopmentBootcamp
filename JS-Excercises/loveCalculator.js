function loveCalculator(){
var your_name = prompt("Enter your name:");
var partner_name = prompt("Enter your lover's name:");
var percent = Math.random();
percent = Math.floor(percent * 100) + 1;
    
if( percent > 70) {alert("Your and " + partner_name + " are " + percent + "% in love 😍💕");}

else if ( percent < 40) {alert("You have a very low conecction, " + percent + "% 🥺");}

else {alert("Your and " + partner_name + " are " + percent + "% in love. You can work on it 💕");}

}

loveCalculator();