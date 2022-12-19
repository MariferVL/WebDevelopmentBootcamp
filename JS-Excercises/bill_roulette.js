function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    var index = Math.random();
    console.log(index);
    index = Math.floor(index * names.length);
    console.log(index);
    var name = names[index];
    selected_name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    
    return selected_name + " is going to buy lunch today!";


/******Don't change the code below*******/    
}

var names = ["Pau", "MilliONaire", "andrea", "Carla", "paBlo", "Javier"]

whosPaying(names) 