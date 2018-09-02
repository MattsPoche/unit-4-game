$(document).ready(function(){
    //Test win condition
    var checkWin = function(){
        if(totalScore === goal){
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        }
        if(totalScore > goal){
            losses++;
            $("#losses").text("Losses: " + losses);
            reset();
        }
    }

    //reset
    var reset = function(){
        ruby = rand(1, 12);
        saphire = rand(1, 12);
        topaz = rand(1, 12);
        emerald = rand(1, 12);
        goal = rand(19, 120);
        totalScore = 0;
        $("#goal").text("Goal: "+goal);
        $("#score").text("Your toatal score is: "+totalScore);
    }

    //rng
    var rand = function(min, max){
        return Math.floor(Math.random()*(max - min + 1) + min);
    }
    
    //variable declaration
    var ruby = rand(1, 12);
    var saphire = rand(1, 12);
    var topaz = rand(1, 12);
    var emerald = rand(1, 12);
    var goal = rand(19, 120);
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    $("#goal").text("Goal: "+goal);  
    
    //on-click functions
    $("#ruby").on("click", function() {
        totalScore += ruby;
        $("#score").text("Your total score is: " + totalScore);
        checkWin();
    });
    $("#saphire").on("click", function() {
        totalScore += saphire;
        $("#score").text("Your total score is: " + totalScore);
        checkWin();
    });
    $("#topaz").on("click", function() {
        totalScore += topaz;
        $("#score").text("Your total score is: " + totalScore);
        checkWin();
    });
    $("#emerald").on("click", function() {
        totalScore += emerald;
        $("#score").text("Your total score is: " + totalScore);
        checkWin();
    });
    
});