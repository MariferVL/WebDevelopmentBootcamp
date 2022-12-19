
function check_guests(){
    var name = prompt("Hi. What's your name?")
    var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"]
    var check = guestList.includes(name)
    if (check){ return alert("Welcome, " + name +"!")
    }else {
        return alert("Sorry, " + name +", your are not in the list this time.")}
}

check_guests();