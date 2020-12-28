var fixedRect, movingRect;
var obj1, obj2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(200,200,80,50);

  obj1 = createSprite(200, 200, 50, 80);
  obj2 = createSprite(100, 100, 50, 80);

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
  obj1.shapeColor = "red";
  obj2.shapeColor = "red";

  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(fixedRect.x -movingRect.x);
  console.log(fixedRect.width/2 + movingRect.width/2);
 
  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "pink";
    movingRect.shapeColor = "pink";
  }else if(isTouching(movingRect,obj1)){
    obj1.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  } else if(isTouching(movingRect,obj2)){
    obj2.shapeColor = "green";
    movingRect.shapeColor = "green";
  }    else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
    obj1.shapeColor = "red";
    obj2.shapeColor = "red";
  }
  drawSprites();
}

function isTouching(object1, object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x -object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y -object1.y < object2.height/2 + object1.height/2){    
    return true;
  }else{    
    return false;
  }
}