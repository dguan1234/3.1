//keyboard events
//capturing key presses and mouse buttons once
//press x and z or mouse left and right

var asterisk;
var ground;
var movingBackground
var bussin
var bozo

var GRAVITY = 1;
var JUMP = 15;

var x1 = 0;
var x2;
var scrollSpeed = 9;

function preload(){
  movingBackground = loadImage("assets/ground.png")
  bussin = loadAnimation("assets/bus0001.png", "assets/bus0002.png")
}

function setup() {
  createCanvas(1000, 500);
  x2 = width


  bozo = createSprite(100, 200);
  bozo.addAnimation('running', 'assets/running0001.png', 'assets/running0002.png');
  bozo.addAnimation('jumping', 'assets/jumping0001.png');
  //if defined, the collider will be used for mouse events
  bozo.setCollider('circle', 0, 0, 64);

  ground = createSprite(100, 450);
  ground.addAnimation('normal', 'assets/small_platform0001.png', 'assets/small_platform0003.png');
}

function draw() {
  background(255, 255, 255);
  backgroundMoving()
  animation(bussin,850,175)
  fill(200);

  bozo.velocity.y += GRAVITY;


// if bozo hits the ground, normal running animation, if he aint on the ground, jumping animation
  if(bozo.collide(ground)) {
    bozo.velocity.y = 0;
    bozo.changeAnimation('running');
  }
  if(keyWentDown('x') || mouseWentDown(LEFT))
  {
    bozo.changeAnimation('jumping');
    bozo.animation.rewind();
    bozo.velocity.y = -JUMP;
  }

  drawSprites();
}

function backgroundMoving() {
  image(movingBackground, x1, 0, width+9, height);
image(movingBackground, x2, 0, width+9, height);

x1 -= scrollSpeed;
x2 -= scrollSpeed;

if (x1 < -width){
  x1 = width;
}
if (x2 < -width){
  x2 = width;
}

}
