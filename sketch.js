var bullet,wall;
var speed,weight, thickness, damage;

function setup() {
  createCanvas(1360,600);

speed = random(223,321);
weight = random(30, 52);


bullet = createSprite(50, 300, 60, 10);
bullet.velocityX = speed;
  bullet.shapeColor = "white"

  thickness = random(22,83)


wall = createSprite(1260, 200, thickness, height/2);
wall.shapeColor = color(80, 80, 80)

}


function draw() {
  background("pink");  

 if(hasCollided(bullet, wall)){

bullet.velocityX = 0;
damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)



if(damage>10){

wall.shapeColor = color(255,0,0)

}

if(damage<10){

wall.shapeColor = color(0,255,0)

}

}


  drawSprites();
}

function hasCollided(lbullet, lwall){

bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;

if(bulletRightEdge >= wallLeftEdge){

return true;

}

else {return false;
}



}