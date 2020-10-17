
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,dustbin1,dustbin2,dustbin3;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,680,800,20);
ball=new Paper(50,600,10)
	Engine.run(engine);
  dustbin1 = new Dustbin(750,626,15,100)
  dustbin2 = new Dustbin(550,626,15,100)
dustbin3 = new Dustbin(650,670,200,15)
keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
}

function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:65,y:-65})
  }
}