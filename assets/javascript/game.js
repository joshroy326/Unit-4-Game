// first need to get the computer to gen a random number for the game to start
var compRandomNum = Math.floor(Math.random() * 100);

//need variables for the wins and losses
var wins = 0;
var losses = 0;
var userCounter = 0;

//need to create onclick events and create variables for the buttons to store a value

$(document).ready(function() {
    //random numbr from the computer is being put into the html here
    $("#computerPick").text(compRandomNum);


    //-- DONE---need to create a way where buttons randomly hold a value 1-12 -- DONE
    //problem im stuck on is how to encapsulate the logic to where the gems have a random number but cannot be the same value as another gem...

    //creat variables where the gem stores a number
    
    var gemBlue = Math.floor(Math.random() * 12) + 1;
    var gemGreen = Math.floor(Math.random() * 12) + 1;
    var gemRed = Math.floor(Math.random() * 12) + 1;
    var gemYellow = Math.floor(Math.random() * 12) + 1;
    
    // creating on click events for each gem button

    
    //-------------------------------------------------------
    $(".button-gem-blue").on("click", function(blue) {
        console.log("blues button value is " + gemBlue);
        console.log("blue button has been clicked");

    });
    //-------------------------------------------------------
    $(".button-gem-green").on("click", function(green) {
        console.log("greens button value is " + gemGreen);
        console.log("green button has been clicked");

    });  
    //-------------------------------------------------------
    $(".button-gem-red").on("click", function(red) {
        console.log("reds button value is " + gemRed);
        console.log("red button has been clicked");

    });
    //-------------------------------------------------------
    $(".button-gem-yellow").on("click", function(yellow) {
        console.log("yellows button value is " + gemYellow);
        console.log("yellow button has been clicked");

    });

    



    //create some logic here for when the user presses a button that it adds to the users score

    

    //loggin the wins and losses
    $("#wins").text("Wins: " + wins++);
    $("#losses").text("Losses: " + losses++);
    $("user-score").text(losses++);
    
    

});
