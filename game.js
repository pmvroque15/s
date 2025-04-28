

let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = []
let userClickedPattern = []
let level = 0
let started = false

$(document).keydown(function() {
    if(!started) {
        $("#level-title").text("Level " + level) 
        nextSequence()
        started = true;
    }
})

$(".btn").click(function() {
        const userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor)
        console.log(userClickedPattern)
        playSound(userChosenColor)

        checkAnswer(userClickedPattern.length-1)
   })

function nextSequence() {
    
    userClickedPattern = []
    
    level++ 
    $("#level-title").text("Level " + level)
    
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)
    
    
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);   
   playSound(randomChosenColor)
  
  
}

function playSound(name) {
    const audio = new Audio("sounds/" + name + ".mp3")
    audio.play()
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed")
    setTimeout(function () {
    $("#" + currentColor).removeClass("pressed")
}, 100);
}

function checkAnswer(currentLevel) {
   

    if(gamePattern[currentLevel]=== userClickedPattern[currentLevel]) {
        console.log("Yipee")
    } 
    if(userClickedPattern.length === gamePattern.length) {
        setTimeout(function () {
            nextSequence()
        }, 1000)
    }
    
    else {
        console.log("wrong!")
    }
}



