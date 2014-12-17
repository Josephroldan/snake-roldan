var snake;
var snakeSize;
var snakeLength;
var snakeDirection;
// primordial variables used throughout the code
var food;
//food variable
var context;
var screenWidth;
var screenHeight;
//fundamental parameter variables
var gameState;
var gameOverMenu;
var gameMenu;
var playHUD;
var restartButton;
var startButton;
var scoreBoard;
//my newest varibles for recent changes

gameInitialize();
snakeInitialize();
foodInitialize();
setInterval(gameLoop, 1000 / 30);

//this calls most off the functions and sets speed



function gameInitialize() {
    var canvas = element = document.getElementById("game-screen");
    context = canvas.getContext("2d");
    /*this is my canvas being drawn*/
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;

    canvas.width = screenWidth;
    canvas.height = screenHeight;

    document.addEventListener("keydown", keyboardHandeler);

    gameMenu= document.getElementById("startScreen");
    gameOverMenu = document.getElementById("gameOver");
    restartButton = document.getElementById("restartButton");
    startButton = document.getElementById("startButton");
    restartButton.addEventListener("click", restart);
    playHUD = document.getElementById("playHUD");
    scoreBoard = document.getElementById("scoreboard");

    setState("START");
}
//main hub of entire game programs the canvas arrowkeys and more
function gameLoop() {
    gameDraw();
    scoreboard();

    if (gameState === "PLAY") {
        snakeUpdate();
        snakeDraw();
        foodDraw();
    }
}
// this loops the game and helps restart button
function restart() {
    snakeInitialize();
    foodInitialize();
    hideMenu(gameOverMenu);
    setState('PLAY');
}
//programs restart button
function start(){
    snakeInitialize();
     foodInitialize();
    hideMenu(gameMenu);
    setState('PLAY');
}
function gameDraw() {
    context.fillStyle = "rgb(208,188,232)";
    context.fillRect(0, 0, screenWidth, screenHeight);


}


//this draws the game

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
//initializes snake


function snakeDraw() {
    for (var index = 0; index < snake.length; index++) {
        console.log("draw");
        context.fillStyle = "black";
        context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
    }
}
//draws snake


function snakeUpdate() {
    var snakeHeadX = snake[0].x;
    var snakeHeadY = snake[0].y;

    if (snakeDirection === "down") {
        snakeHeadY++;
    }
    else if (snakeDirection === "right") {
        snakeHeadX++;
    }
    else if (snakeDirection === "left") {
        snakeHeadX--;
    }
    else if (snakeDirection === "up") {
        snakeHeadY--;
    }
    else if (snakeDirection === "up") {
        snakeHeadY++;
    }
    else if (snakeDirection === "left") {
        snakeHeadX++;
    }


    checkFoodColisions(snakeHeadX, snakeHeadY);
    checkWallCollisions(snakeHeadX, snakeHeadY);
    snakecollide(snakeHeadX, snakeHeadY);

    var snakeTail = snake.pop();
    snakeTail.x = snakeHeadX;
    snakeTail.y = snakeHeadY;
    snake.unshift(snakeTail);
}

//main program because it updates entire game

function foodInitialize() {
    food = {
        x: 0,
        y: 0
    };
    snakeFoodPositiion();
}
//initializes food and calls position


function foodDraw() {
    context.fillStyle = "black";
    context.fillRect(food.x * snakeSize, food.y * snakeSize, snakeSize, snakeSize);
}

//draws the food

function snakeFoodPositiion() {
    var randomX = Math.floor(Math.random() * screenWidth);
    var randomY = Math.floor(Math.random() * screenHeight);
    food.x = Math.floor(randomX / snakeSize);
    food.y = Math.floor(randomY / snakeSize);
}
//helps randomize food


function keyboardHandeler(event) {
    console.log(event);
    if (event.keyCode == "39" && snakeDirection != "left") {
        snakeDirection = "right";
    }
    else if (event.keyCode == "40" && snakeDirection != "up") {
        snakeDirection = "down";
    }
    else if (event.keyCode == "38" && snakeDirection != "down") {
        snakeDirection = "up";
    }
    else if (event.keyCode == "37" && snakeDirection != "right") {
        snakeDirection = "left";
    }
}
//allows my arrow keys to move snake

function checkFoodColisions(snakeHeadX, snakeHeadY) {
    if (snakeHeadX === food.x && snakeHeadY === food.y) {
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
//this function helps randomize the food 
function checkWallCollisions(snakeHeadX, snakeHeadY) {
    if (snakeHeadX * snakeSize >= screenWidth || snakeHeadX * snakeSize < 0 || snakeHeadY * snakeSize >= screenHeight || snakeHeadY * snakeSize < 0) {


        setState("GAME OVER");
    }
//this allows my line of code to have wall collisions
}
function snakecollide(snakeHeadX, snakeHeadY) {
    for (var index = 1; index < snake.length; index++) {
        if (snakeHeadX == snake[index].x && snakeHeadY == snake[index.y]) {
            setState("GAME OVER");
            return;

//            this allows snake collisions
        }
    }
}




function setState(state) {
    gameState = state;
    showMenu(state);
}
//this sets my game states
function displayMenu(menu) {
    console.log(menu);
    menu.style.visibility = "visible";
}
//this shows my visibility patterns
function showMenu(state) {
    console.log(state);
    if (state == "START") {
        displayMenu(gameMenu);
    }
    else if (state == "PLAY") {
        displayMenu(playHUD);
    }else{
        displayMenu(gameOverMenu);
    }
    
//this allows my play HUD and menu to show
}

function hideMenu(menu) {
    menu.style.visibility = "hidden"
}
//used to hide menu 
function scoreboard() {
    scoreBoard.innerHTML = "length" + snakeLength;
}