var buttomNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fivetten", "sixteen"]
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var score = -1;

$(".start").click(function () {
    if (!started) {
        $("#Score-title").text("Score " + score);
        nextSequence();
        started = true;
    }
});


$(".btn").click(function () {
    var userChosenNumber = $(this).attr("id");
    userClickedPattern.push(userChosenNumber);
    playSound(userChosenNumber);
    animatePress(userChosenNumber)

    checkAnswer(userClickedPattern.length - 1);

})

function checkAnswer(currentLevel) {


    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        


        if (userClickedPattern.length === gamePattern.length) {


            setTimeout(function () {
                nextSequence();
            }, 1000);

        }

    } else {

      

        playSound("wrong");

       

        alert("Your Score is "+ score);

        $("#Score-title").text("Game Over, Click Start Button to Restart");


        startOver();
    }
}




function nextSequence() {
    userClickedPattern = [];



    score++;
    $("#Score-title").text("score " + score);


    var randomNumber = Math.floor(Math.random() * 16);
    var randomChosenNumber = buttomNumbers[randomNumber];
    gamePattern.push(randomChosenNumber);

    $("#" + randomChosenNumber).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenNumber);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentNumber) {
    $("#" + currentNumber).addClass("pressed");
    setTimeout(function () {
        $("#" + currentNumber).removeClass("pressed");
    }, 100);
}
function startOver() {


    score = -1;
    gamePattern = [];
    started = false;
}