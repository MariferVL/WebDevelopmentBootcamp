
var instruments_list = ["tom-1", "tom-2", "tom-3", "tom-4", "snare", "crash", "kick-bass"]
const instrument = new Audio("sounds/" + instruments_list[i] + ".mp3");

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    const instrument = new Audio("sounds/" + instruments_list[i] + ".mp3");
    document.querySelectorAll(".drum")[i].addEventListener("click", function () { hitOnClick(instrument) });
}

function hitOnClick(item) {
    item.play();
}




// let textBox = document.getElementById('message');
// textBox.addEventListener('w', (event) => {
//     console.log('key=' + event.key + ',code= ' + event.code)
// })

