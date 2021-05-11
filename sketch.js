
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var stand1,stand2,ground;

var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27,b28;
var ball,slingshot;
function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(650,680,1300,50);

     stand1=new Ground(750,450,230,10);

	 stand2=new Ground(1100,300,230,10);

   ball=new Ball(150,400,12);

	 b1=new Block(710,420);
	 b2=new Block(750,420);
	 b3=new Block(790,420);
	 b4=new Block(830,420);
	 b5=new Block(670,420);

	 b6=new Block(690,380);
    b7=new Block(730,380);
	b8=new Block(770,380);
	b9=new Block(810,380)

	b10=new Block(710,340);
	b11=new Block(750,340);
	b12=new Block(790,340);

	b13=new Block(730,300);
	b14=new Block(770,300);

  b15=new Block(1020,270);;
  b16=new Block(1060,270);
  b17=new Block(1100,270);
  b18=new Block(1140,270);
  b19=new Block(1180,270);

  b20=new Block(1040,230);
  b21=new Block(1080,230);
  b22=new Block(1120,230);
  b23=new Block(1160,230);

  b24=new Block(1060,190);
  b25=new Block(1100,190);
  b26=new Block(1140,190);

  b27=new Block(1080,150);
  b28=new Block(1120,150);
	
slingshot=new Sling(ball.body,{x:150,y:400});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange")

  Engine.update(engine);
  push();
textSize(60);
fill(225);
strokeWeight(10);
stroke(57,147,235)
text("Hit The Blocks!!",400,150);
  pop();
  // mouseDragged();
   //mouseReleased();
   
  ground.display();

  stand1.display();
  
  stand2.display(); 
 
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display()
  b7.display();
  b8.display();
  b9.display();

  b10.display();
  b11.display();
  b12.display();
  
  b13.display();
  b14.display();

  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();

  b20.display();
  b21.display();
  b22.display();
  b23.display();

  b24.display();
  b25.display();
  b26.display();

  b27.display();
  b28.display();


  slingshot.display();

ball.display();

}



function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  
}
  
function mouseReleased(){
  slingshot.fly();

 
}

function keyPressed(){
  if (keyCode===32){
    slingshot.attach(ball.body);
    Matter.Body.setPosition(ball.body,{x:150,y:400});
    
  }
}