var snake;
var snakeSize;
var snakeLength;

var context;
var screenwidth;
var screenheight;

gameInitialize();
snakeInitialize();
gameDraw();
snakeDraw();



function gameInitialize() {
    var canvas = element = document.getElementById("game-screen");
    context = canvas.getContext("2d");

    screenwidth = window.innerWidth;
    screenheight = window.innerHeight;

    canvas.width = screenwidth;
    canvas.height = screenheight;
}
function gameLoop() {
snakeUpdate();
snakeDraw();
}
function gameDraw() {
    context.fillStyle = "rgb(208,188,232)";
    context.fillRect(0, 0, screenwidth, screenheight);
    
    
}

function snakeInitialize() {
    snake = [];
    snakeSize = 20;
    snakeLength = 10;

    for (var index = snakeLength - 1; index >= 0; index--) {
        snake.push({
            x: index,
            y: 0
        });
    }
}
function snakeDraw() {
    for (var index = 0; index < snake.length; index++) {
        console.log("draw");
        context.fillStyle = "black";
        context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
    }
}
function snakeUpdate() {
var snakeHeadX = snake[0].x;
var snakeHeadY = snake[0].y;

snakeHeadX++;

var snakeTail = snake.pop();
snakeTail.x = snakeHeadX;
snakeTail.y = snakeHeadY;
snake.unshift(snakeTail);
}