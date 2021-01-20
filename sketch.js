
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var stand1,stand2;
var ground;
var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10,box11;
var box12,box13,box14,box15;
var box16,box17,box18;
var box19;

var box20,box21,box22,box23,box24,box25,box26,box27,box28;
var shooter,slingShot;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stand1=new Ground(650,500,400,20);
	stand2=new Ground(1200,300,350,20);
	ground=new Ground(800,650,1600,20);

	

	
	box1=new Box(500,490,50,60);
	box2=new Box(560,490,50,60);
	box3=new Box(620,490,50,60);
	box4=new Box(680,490,50,60);
	box5=new Box(740,490,50,60);
	box6 =new Box(800,490,50,60);
	
	

	box7=new Box(530,435,50,60);
	box8=new Box(590,435,50,60);
	box9=new Box(650,435,50,60);
	box10=new Box(710,435,50,60);
	box11=new Box(770,435,50,60);

	box12=new Box(560,380,50,60);
	box13=new Box(620,380,50,60);
	box14=new Box(680,380,50,60);
	box15=new Box(740,380,50,60);

	box16=new Box(590,325,50,60);
	box17=new Box(650,325,50,60);
	box18=new Box(710,325,50,60);

	box19=new Box(650,275,50,60);

	box20=new Box(1075,250,50,60);
	box21=new Box(1135,250,50,60);
	box22=new Box(1195,250,50,60);
	box23=new Box(1255,250,50,60);
	box24=new Box(1315,250,50,60);

	box25=new Box(1135,200,50,60);
	box26=new Box(1195,200,50,60);
	box27=new Box(1255,200,50,60);

	box28=new Box(1195,150,50,60);

	shooter=new Shooter(200,250,70,70);
	slingShot=new SlingShot(shooter.body,{x:200,y:350});
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(56,44,44);


  stand1.display();
  stand2.display();
  ground.display();

  strokeWeight(3);
	stroke("blue");
	fill("skyblue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
 box5.display();
  box6.display();

  fill("gold");
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  fill("red");
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  
 fill("yellow");
  box16.display();
  box17.display();
  box18.display();
  
  fill("silver");
  box19.display();
  
 fill("lime");
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();

  fill("violet");
  box25.display();
  box26.display();
  box27.display();

  fill("lightgreen");
  box28.display();

  slingShot.display();
  shooter.display();


 
  
  drawSprites();
 fill("white");
 stroke("blue");
 textSize(40);
 textStyle("bold");

  text("PYRAMID SHOOTING GAME",400,50);
 textSize(20);
 fill("yellow");
  text("PRESS SPACEBAR FOR ANOTHER CHANCE",1000,40);

 
 
}
function mouseDragged() {
	Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY});
	
	}
	function mouseReleased() {
	slingShot.fly() ;
	}

	function keyPressed() {
		if(keyCode===32) {
		   Matter.Body.setPosition(shooter.body,{x:200,y:350}) 
		   slingShot.attach(shooter.body);
		} 
	 
		 }





