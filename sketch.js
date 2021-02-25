
var fixedRect, movingRect;
var ob1,ob2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  ob1 = createSprite(300, 400,80,30);
  ob1.shapeColor = "green";

  ob2 = createSprite(500, 400,80,30);
  ob2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,ob1)){
    movingRect.shapeColor = "blue";
    ob1.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    ob1.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(a1,a2){
  if (a1.x - a2.x < a2.width/2 +a1.width/2
    && a2.x - a1.x < a2.width/2 + a1.width/2
    && a1.y - a2.y < a2.height/2 + a1.height/2
    && a2.y - a1.y < a2.height/2 + a1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


