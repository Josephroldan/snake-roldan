var snake;
var snakeSize;
var snakeLength;

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
function snakeInitialize (){
    snake = [];
    snakeSize = 20
    snakeLength= 5;
    
    for(var index = 0; index < snakeLength; index++) {
    
   snake.push({
       x:index,
       y:0
   })
           
                 }
}
function snakeDraw (){
  for(var index = 0; index < snake.Length; index++) {
      context.fillStyle = "black";
      context.fillRect(snake[index].x*snakeSize, snake[index]);
  }  
}
function snakeUpdate (){
    
}