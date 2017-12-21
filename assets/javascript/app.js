$(document).ready(function() {
 var span = document.getElementsByClassName("start")
[0];

 var wins = 0

 var mins = 1;

 var secs = mins * 60;

 var go;



$("span").click(function() {
    // $("span").on("click", run);
    alert("the page was clicked");


run();
$(".quizQuestions").css("visibility", "visible");


// $("li").click(function(){
//     alert("answer is chosen");

//  if .click ===(".a")
// });



});

$("li").click(function() {
alert("answer has been stored");
// $("this")===(".a");
console.log(this)

if($(this).hasClass("a")) {   //sum up

wins++;
$("#wins").html( "</P>" + wins + "/5 out of correct</p>");


// should have listed an array of answers, would have made it easier to matched clicked answer with the answer stored in the array.

// if clicked answer equals correct answer wins ++,

 //else if do nothing.

  // submit and time should stop the click function and user may click on submit when answers are stored.

  // p.s. li's should have been in form input  radio buttons//

}

});





function run() {
  go = setInterval(decrement,1000);

}

 function decrement() {
   secs--;

$("#show-number").html("<h2>" + secs
 + "</h2");


if (secs === 0) {
  stop();

  alert("Time is Up!");
}


function stop() {

  clearInterval(go);

}

}

});
