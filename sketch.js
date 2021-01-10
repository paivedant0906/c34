const Engine=Matter.Engine;
const World=Matter.World;
const Constraint=Matter.Constraint;
const Bodies=Matter.Bodies;
var ci;
var engine,world;
function preload(){
ci=loadImage("crane.png");
}
function setup() {

  createCanvas(1400,650);

  engine=Engine.create()
  world=engine.world;

  ground=new Ground(600,640,1600,20)
  box1=new Box(1000,600,50,50);
  box2=new Box(1000,560,50,50);
  box3=new Box(1000,520,50,50);
  box4=new Box(1000,480,50,50);
  box5=new Box(1000,440,50,50);
  box6=new Box(1000,400,50,50);
  box7=new Box(1000,360,50,50);

  box15=new Box(1000,320,50,50);
  box16=new Box(1000,280,50,50);
  box17=new Box(1000,240,50,50);
  box18=new Box(1000,200,50,50);


  box8=new Box(950,600,50,50);
  box9=new Box(950,560,50,50);
  box10=new Box(950,520,50,50);
  box11=new Box(950,480,50,50);
  box12=new Box(950,440,50,50);
  box13=new Box(950,400,50,50);
  box14=new Box(950,360,50,50);

  box19=new Box(950,320,50,50);
  box20=new Box(950,280,50,50);
  box21=new Box(950,240,50,50);
  box22=new Box(950,200,50,50);

  box23=new Box(900,600,50,50);
  box24=new Box(900,560,50,50);
  box25=new Box(900,520,50,50);
  box26=new Box(900,480,50,50);
  box27=new Box(900,440,50,50);
  box28=new Box(900,400,50,50);
  box29=new Box(900,360,50,50);

  box30=new Box(900,320,50,50);
  box31=new Box(900,280,50,50);
  box32=new Box(900,240,50,50);
  box33=new Box(900,200,50,50);

ball=new Ball(700,600)
sling1=new SlingShot(ball.body,{x:680,y:280})
 
}

function draw() {
  background(0);  
  Engine.update(engine)
  ground.display();
  image(ci,100,30,600,600)
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();

ball.display();
sling1.display();

  
}


function mouseDragged(){
 
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

}
