var track, trackIMG, boy, boyIMG,left_boundary, right_boundary;
function preload(){
  //pre-load images
  trackIMG = loadImage("path.png");
  boyIMG = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200);
  track.addImage(trackIMG);
  track.velocityY = -5;

  boy = createSprite(200,200,10,10);
  boy.addAnimation("running",boyIMG);
  boy.scale = 0.08;

  left_boundary = createSprite(0,300,100,600);
  right_boundary = createSprite(390,300,80,600);
  left_boundary.visible = false;
  right_boundary.visible = false;
}

function draw() {
  background(0);
  if(track.y < 0){
    track.y = track.height/2;
  }

  boy.x = World.mouseX;
  boy.collide(left_boundary);
  boy.collide(right_boundary);

  createEdgeSprites();
  drawSprites();
}
