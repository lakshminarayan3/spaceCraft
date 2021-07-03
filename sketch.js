var iss,spacecraft,hasDocked
var hasDocked = false;


function preload(){
  bg=loadImage("spacebg.jpg");
  issImg=loadImage("iss.png");
  scImg=loadImage("spacecraft1.png");
  scImg1=loadImage("spacecraft2.png");
  scImg2=loadImage("spacecraft3.png");
  scImg3=loadImage("spacecraft4.png");
  
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(300,130)
  iss.addImage(issImg)
  iss.scale=0.5;
  spacecraft=createSprite(300,250)
  spacecraft.addImage(scImg)
  spacecraft.scale=0.15;
  
}

function draw() {
  background(bg);  
  drawSprites();
  spacecraft.addImage(scImg);
  if( !hasDocked ){
    // Write code to set random x position for spacecraft
    spacecraft.x=spacecraft.x+random(-1,1)
  if(keyDown(LEFT_ARROW)){
    spacecraft.addImage(scImg2)
     spacecraft.x=spacecraft.x-2
  }
  if(keyDown(RIGHT_ARROW)){
    spacecraft.addImage(scImg3)
     spacecraft.x=spacecraft.x+2
  }
  if(keyDown(UP_ARROW)){
    spacecraft.addImage(scImg1)
     spacecraft.y=spacecraft.y-2
  }
  
  }

}