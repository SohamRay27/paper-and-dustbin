
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(100,600,40)
d1=new Dustbin(500,600,10,95)
d2=new Dustbin(300,600,10,95)
d3=new Dustbin(400,650,190,10)
ground=new Ground(400,700,800,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);





  paper.display()
  d1.display()
  d2.display()
  d3.display()
ground.display()
 
}



function keyPressed(){

if(keyCode === UP_ARROW){



Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})



}
}