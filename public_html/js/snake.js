var snake;

var context;
var screenwidth;
var screenheight;

gamedraw();
gameinitialize();
function gameinitialize(){
    var canvas=element = document.getElementById("game-screen");
    context=canvas.getcontext("2d");
    
    screenwidth=window.innerWidth;
    screenheight=window.innerHeight;
    
    canvas.width =screenWidth;
    canvas.height =screenHeight; 
}
function gameloop(){
    
}
function gamedraw(){
    context.fillstyle = "rgb(152, 156, 237)";
    context.fillrect(0,0,screenwidth,screenheight);
    
}