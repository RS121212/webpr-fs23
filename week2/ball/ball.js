const radius = 10;
const ball = {x: 20, y: 0, dx: 5, dy: 1};
let old = {x: ball.x, y: ball.y};

function start() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "black";

    setInterval(() => {
        nextBoard();
        display(context);
    }, 1000 / 20);
}

function nextBoard() {
    // keep old ball values for the sake of efficient clearing of the old display
    old.x = ball.x;
    old.y = ball.y;

    // handle ball is hitting the bounds
    if(ball.x >= 400) ball.x = 20;
    if(ball.y >= 400) ball.y = 0;
    //   reverse direction
    //   lose some energy relative to the current inertia (only velocity varies)

    // calculate new position
    ball.x = ball.x +20 ;
    //ball.dx = ball.dx + 10;
    ball.y = ball.y +10;
    //ball.dy = ball.dy + 10;

    // calculate any changes in velocity due to gravitational pull or medium resistance


}

function display(context) {
    context.clearRect(old.x - radius - 1, old.y - radius - 1, 22, 22);
    fillBox(context)
}

function fillBox(context) {
    context.beginPath();
    context.arc(ball.x, ball.y, radius, 0, 6.3, false);
    context.fill();
}


