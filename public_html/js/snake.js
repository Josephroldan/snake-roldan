var snake;

var context;
var screenwidth;
var screenheight;

gameInitialize();
gameDraw();

function gameInitialize(){
    var canvas=element = document.getElementById("game-screen");
    context=canvas.getContext("2d");
    
    screenwidth=window.innerWidth;
    screenheight=window.innerHeight;
    
    canvas.width =screenwidth;
    canvas.height =screenheight; 
}
function gameLoop(){
    
}
function gameDraw(){
    context.fillStyle = "rgb(208,188,232)";
    context.fillRect(0,0,screenwidth,screenheight);
}