var snake;
var snakeSize;
var snakeLength;
var snakeDirection;

var food;

var context;
var screenWidth;
var screenHeight;

var gameState;

gameInitialize();
snakeInitialize();
foodInitialize();
setInterval(gameLoop, 1000 / 30);





function gameInitialize() {
    var canvas = element = document.getElementById("game-screen");
    context = canvas.getContext("2d");

    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;

    canvas.width = screenWidth;
    canvas.height = screenHeight;

    document.addEventListener("keydown", keyboardHandeler)
    setState("PLAY");
}
function gameLoop() {
    gameDraw();
    if (gameState == "PLAY") {
        snakeUpdate();
        snakeDraw();
        foodDraw();
    }
}




function gameDraw() {
    context.fillStyle = "rgb(208,188,232)";
    context.fillRect(0, 0, screenWidth, screenHeight);


}




function snakeInitialize() {
    snake = [];
    snakeSize = 20;
    snakeLength = 1;
    snakeDirection = "down";

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

    if (snakeDirection == "down") {
        snakeHeadY++;
    }
    else if (snakeDirection == "right") {
        snakeHeadX++;
    }
    else if (snakeDirection == "left") {
        snakeHeadX--;
    }
    else if (snakeDirection == "up") {
        snakeHeadY--;
    }
    else if (snakeDirection == "up") {
        snakeHeadY++;
    }
    else if (snakeDirection == "left") {
        snakeHeadX++;
    }


    checkFoodColisions(snakeHeadX, snakeHeadY);
    checkWallCollisions(snakeHeadX, snakeHeadY);

    var snakeTail = snake.pop();
    snakeTail.x = snakeHeadX;
    snakeTail.y = snakeHeadY;
    snake.unshift(snakeTail);
}



function foodInitialize() {
    food = {
        x: 0,
        y: 0
    };
    snakeFoodPositiion();
}



function foodDraw() {
    context.fillStyle = "black";
    context.fillRect(food.x * snakeSize, food.y * snakeSize, snakeSize, snakeSize);
}



function snakeFoodPositiion() {
    var randomX = Math.floor(Math.random() * screenWidth);
    var randomY = Math.floor(Math.random() * screenHeight);
    food.x = Math.floor(randomX / snakeSize);
    food.y = Math.floor(randomY / snakeSize);
}



function keyboardHandeler(event) {
    console.log(event);
    if (event.keyCode == "39" && snakeDirection != "left") {
        snakeDirection = "right";
    }
    else if (event.keyCode == "40" && snakeDirection != "up") {
        snakeDirection = "down";
    }
    else if (event.keyCode == "38") {
        snakeDirection = "up";
    }
    else if (event.keyCode == "37") {
        snakeDirection = "left";
    }
}


function checkFoodColisions(snakeHeadX, snakeHeadY) {
    if (snakeHeadX == food.x && snakeHeadY == food.y) {
        snake.push({
            x: 0,
            y: 0
        });
        snakeLength++;
        randomX = Math.floor(Math.random() * screenWidth);
        randomY = Math.floor(Math.random() * screenHeight);
        food.x = Math.floor(randomX / snakeSize);
        food.y = Math.floor(randomY / snakeSize);
    }
}
function checkWallCollisions(snakeHeadX, snakeHeadY) {
    if (snakeHeadX * snakeSize >= screenWidth || snakeHeadX * snakeSize < 0) {
        if (snakeHeadY*snakesize >= screenHeight);
setState('GAME OVER');
    }

}




function setState(state) {
    gameState = state;
}