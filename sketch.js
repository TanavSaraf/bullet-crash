var bullet;
var wall,thickness;
var speed,weight;
var damage;

function setup() {
createCanvas(1600,400);

speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);

bullet=createSprite(50, 200, 50, 10);
bullet.shapeColor=color(255,255,255);
wall=createSprite(1200,200,thickness,200);
wall.shapeColor=rgb(80,80,80);

bullet.velocityX=speed;

}

function draw() {
background(0,0,0); 

if(bullet.collide(wall))
{
  bullet.velocityX=0;
  damage=0.5*weight*speed*speed/thickness*thickness*thickness
  
   if(damage<10)
   {
     wall.shapeColor="green";
   }else if(damage>10)
   {
     wall.shapeColor="red";
   }
  
}

drawSprites();
}