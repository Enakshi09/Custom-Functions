var fixedRect, movingRect, rect1, rect2, rect3

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(200,150,50,50)
  rect1.velocityY = 3
  rect1.shapeColor = "yellow"
  rect2 = createSprite(200,600,50,50)
  rect2.velocityY = -3
  rect2.shapeColor = "aquamarine"
  rect3 = createSprite(400,500,50,50)
  rect3.shapeColor = "orange"
}

function draw() {
  background(0,0,0);  
  rect3.x = World.mouseX;
  rect3.y = World.mouseY;
  if(isTouching(rect3,movingRect)){
    rect3.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    rect3.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  bounceOff(rect1,rect2);
  drawSprites();
}
