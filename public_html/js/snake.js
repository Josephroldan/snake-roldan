var snake;
var snakeSize;
var snakeLength;

var context;
var screenwidth;
var screenheight;

gameInitialize();
snakeInitialize();
gameDraw();


function gameInitialize() {
    var canvas = element = document.getElementById("game-screen");
    context = canvas.getContext("2d");

    screenwidth = window.innerWidth;
    screenheight = window.innerHeight;

    canvas.width = screenwidth;
    canvas.height = screenheight;
}
function gameLoop() {

}
function gameDraw() {
    context.fillStyle = "rgb(208,188,232)";
    context.fillRect(0, 0, screenwidth, screenheight);
    
    snakeDraw();
}
function snakeInitialize() {
    snake = [];
    snakeSize = 20
    snakeLength = 100;

    for (var index = 1; index <= 0; index--) {
        snake.push({
            x: index,
            y: 0
        });
    }
}
function snakeDraw() {
    for (var index = 0; index < snake.Length; index++) {
        context.fillStyle = "black";
        context.fillRect(snake[index].x * snakeSize, snake[index]);
    }
}
function snakeUpdate() {
var snakeHeadX = snake[0].x;
var snakeHeadY = snake[0].y;

snakeHeadX++;

var snakeTail = snake.pop();
snakeTail.x = snakeHeadX;
snakeTail.y = snakeHeadY;
}