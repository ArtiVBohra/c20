var a,b;

function setup() {
  createCanvas(800,400);
 a=createSprite(400, 200, 50, 50);
 a.shapeColor = "green"
 a.debug="true"
 b= createSprite(200,130,40,40)
 b.shapeColor = "green"
 b.debug="true"

}

function draw() {
  background(255,255,255);  

  a.x =mouseX;
  a.y = mouseY;
console.log(a.x-b.x)
  if((a.x-b.x)<45){
    a.shapeColor = "red"
    b.shapeColor = "red"
 }
  else{
    a.shapeColor = "green"
    b.shapeColor = "green"
  }
  drawSprites();
}