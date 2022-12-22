// $("h1").css("color", "red");
console.log($("h1").css("color"));
console.log($("h1").css("font-size"));

// $("h1").addClass("big-title");
$("h1").addClass("big-title margin-50"); // add multiple classes

console.log($("h1").hasClass("big-title"));  // give a Boolean as output

$("h1").text("You are billionaire!")
$("button").text("Win");  // $ select all the elements 
$("button").html("<em>Hoy es el día<em>");  // same function than innerHTML
console.log($("img").attr("src")); //show the attribute
console.log($("h1").attr("class"));
$("a").attr("href", "https://www.spotify.com"); //give a 2nd parameter to change attribute
$("h1").click(function () {          //  event listener 
    $("h1").css("color", "#2bdfe2");
})

// Event listener for multiple elements:
// old way:
// for (let index = 0; index < 5; index++) {
//     document.querySelectorAll("button")[index].addEventListener("click", function () {
//         document.querySelector("h1").style.color = "#f58d0e"
//     });
// }
// Jquery way:
$("button").click(function () {
    $("h1").css("color", "#f58d0e");
})

$("input").keypress(function (event) {
    console.log(event.key);
    $("h1").text(event.key);
});

$(document).keypress(function (event) {  // document === "body"
    $("h1").text(event.key);
});

$("body").on("mouseover", function () {  // more flexible event listener
    $("h1").css("color", "#f58d0e");
})

$("h1").before("<button>Before</button>"); // create a new element located before a current element.

$("h1").after("<button>After</button>"); // create a new element located after a current element.

$("h1").prepend("<button>Prepend</button>"); // create a new element inside a current element and before its content

$("h1").append("<button>Append</button>"); // create a new element inside a current element and after its content.

// $("button").remove(); // delete all the elements selected

// $("button").click(function () {  // hide the selected element
//     $("h1").hide();
// })

// $("button").click(function () {  // show the selected element
//     $("h1").show();
// })

// $("button").click(function () {  // toggle the selected element appearance
//     $("h1").toggle();
// })


// $("button").click(function () {  // fade out the selected element appearance
//     $("h1").fadeOut();
// })

//  $("h1").hide();
// $("button").click(function () {  // fade in the selected element appearance
//     $("h1").fadeIn();
// })

// $("button").click(function () {  // toogle the fade of selected element appearance
//     $("h1").fadeToggle();
// })

// $("button").click(function () {  // fade the selected element appearance
//     $("h1").slideUp();
// })

// $("button").click(function () {  // fade the selected element appearance
//     $("h1").slideDown();
// })

// $("button").click(function () {  // fade the selected element appearance
//     $("h1").slideToggle();
// })

// $("button").click(function () {  
//     $("h1").animate({opacity: 0.5});  // only works on attributes with numeric value. E.g: ({margin: 33%}) or ({margin: "33%"})
// })

$("button").click(function () {  // multiple actions to selected element 
    $("h1").slideUp().slideDown().animate({opacity: "0.5"}).animate({opacity: 1});
})







