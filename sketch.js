var pong,pong_image;
var jungle,jungle_image;
  
function preload(){
  jungle_image=loadImage("capstone jungle.jpg")
}


function setup() {
  createCanvas(400,400);
  jungle=createSprite(40,200,20,20);
  jungle.addImage("jungle_image");
}

function draw() {
  background(220);
  drawSprites();
}