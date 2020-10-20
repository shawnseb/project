var car;
var wall;
var speed;
var weight;

  function setup (){
    car=createSprite(50,200,50,50);
wall=createSprite(300,200,50,200);
speed=random(55,90);
  weight=random(400,1500);
  }
function draw() {
   background("blue");
  
  car.velocityX=speed;
if(0.5*weight*speed*speed/22500<=100 && car.isTouching(wall)){
 car.shapeColor="green";
 
}
if(0.5*weight*speed*speed/22500>=180 && car.isTouching(wall)){
  car.shapeColor="red";
  
}
if(0.5*weight*speed*speed/22500>=100 && 0.5*weight*speed*speed/22500 < 180 && car.isTouching(wall)){
  car.shapeColor="yellow";
}
if(car.isTouching(wall)){
  car.velocityX=0;
}
textFont("white");
text(speed, 50,200);
text(weight,70,220);
  drawSprites();
}
