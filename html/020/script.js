const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


let ball, bumper;

bumper = new Point(new Vector2d(width/2, height/2), 200, "Green", "bumper");
ball = new dPoint(new Vector2d(200,200), new Vector2d(5,6), new Vector2d(0,0), 20, "black", "BLOCK");

ball.rad = new Vector2d(1,1);

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);

    ball.update();
    ball.rad.dx = bumper.position.dx - ball.pos.dx;
    ball.rad.dy = bumper.position.dy - ball.pos.dy;

    bumper.draw(context);
    ball.draw(context);

    ball.vel.draw(context,ball.pos,20,"Red");
    ball.rad.draw(context,ball.pos,1,"Blue");
}

animate();