var turn = ["⭕️", "❌", "⭕️", "❌", "⭕️", "❌", "⭕️", "❌", "⭕️"];
var turnNumber = 0; 
var userOnePattern = [];
var userTwoPattern = [];

var row1 = ["1", "2", "3"];
var row2 = ["4", "5", "6"];
var row3 = ["7", "8", "9"];
var column1 = ["1", "4", "7"];
var column2 = ["2", "5", "8"];
var column3 = ["3", "6" ,"9"];
var diagonal1 = ["1", "5", "9"];
var diagonal2 = ["3", "6", "7"];

$(".btn").addClass("unclicked");

function start(){
$(document).keydown(function(){
    $("h2").text("Player " + turn[turnNumber]);
    $(".btn").removeClass("unclicked");
    $(document).unbind("keydown");

});
}

start();
    
$(".btn").click(function(){
    var buttonId = $(this).attr("id");
    var buttonValue = $(this).attr("value");
    if(turn[turnNumber] === "⭕️"){
        $("#"+buttonId).addClass("clicked1 unclicked"); 
        turnNumber++;
        userOnePattern.push(buttonValue);
        if(checkAnswer()){
        $("h2").text("Player " + turn[turnNumber]);
        if(turnNumber === 9){
            $("h2").text("Game Over.");
        }
    }
    }
    else{
        $("#"+buttonId).addClass("clicked2 unclicked");
        turnNumber++;
        userTwoPattern.push(buttonValue);
       if( checkAnswer()){
        $("h2").text("Player " + turn[turnNumber]);
        
        
        if(turnNumber === 9){
            $("h2").text("Game Over.");
        }
    }
    }
    
});


function checkAnswer(){
    if(turnNumber < 3){
        return true;
    }
    else{
        userOnePattern.sort();
        userTwoPattern.sort();
        if( [JSON.stringify(row1), JSON.stringify(row2), JSON.stringify(row3), JSON.stringify(column1), JSON.stringify(column2), JSON.stringify(column3), JSON.stringify(diagonal1), JSON.stringify(diagonal2)].includes(JSON.stringify(userOnePattern))  ){
            $("h2").text("Player ⭕️ won. Press any key to restart");
            $(".btn").addClass("unclicked");
            restart();
            return false;
        }
        else if([JSON.stringify(row1), JSON.stringify(row2), JSON.stringify(row3), JSON.stringify(column1), JSON.stringify(column2), JSON.stringify(column3), JSON.stringify(diagonal1), JSON.stringify(diagonal2)].includes(JSON.stringify(userTwoPattern))  ){
            $("h2").text("Player ❌ won. Press any key to restart");
            $(".btn").addClass("unclicked");
            restart();
            return false;
        }
        else{
            return true;
        }
}
}

function restart(){
    turnNumber = 0;
    userOnePattern = [];
    userTwoPattern = [];
    setTimeout(function(){
        $(".btn").removeClass("clicked1 clicked2");
    }, 1000);
    
    start();
}