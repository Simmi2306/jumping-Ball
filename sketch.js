var fixedRect, movingRect;
var ob1,ob2,ob3,ob4;
var m1,v1;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
ob1=createSprite(100,100,50,50);
ob1.shapeColor="green";
ob2=createSprite(200,100,50,50);
ob2.shapeColor="green";
ob3=createSprite(300,100,50,50);
ob3.shapeColor="green";
ob4=createSprite(400,100,50,50);
ob4.shapeColor="green";
m1=createSprite(500,100,20,10);
m1.shapeColor="blue";
m1.velocityY=1;
v1=createSprite(500,500,50,10);
v1.shapeColor="blue";
v1.velocityY=-1;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,ob3)) {
    movingRect.shapeColor = "red";
    ob3.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    ob3.shapeColor = "green";
  }
  bounceOff(m1,v1);
  drawSprites();

}
function isTouching(object1,object2){
  if(object1.x -object2.x < object2.width/2 + object1.width/2
  &&object2.x - object1.x < object2.width/2 + object1.width/2
  && object1.y - object2.y <object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    return true;
  }
  else{
    return false;
  }

}
function bounceOff(object1,object2){
  if(object1.x -object2.x < object2.width/2 + object1.width/2
    &&object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
    }
    
  if(object1.y - object2.y <object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY=object1.velocityY*(-1);
      object2.velocityY=object2.velocityY*(-1);
    }
}