
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var ground;
var boy,stone;
var tree,mango,mango2,mango3,mango4,mango5,mango6,mango7,amngo8,mango9,mango10,mango11,mango12,mango13;
var pluck;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

ground=Bodies.rectangle(400,500,800,15)

boy = new Boy(150,450,250,250) 

tree = new Tree(580,300,450,450)

mango = new Mango(520,150,50,50);
mango2 = new Mango(580,170,50,50);
mango3 = new Mango(690,170,50,50);
mango4 = new Mango(620,120,50,50);
mango5 = new Mango(640,170,50,50);
mango6 = new Mango(500,210,50,50);
mango7 = new Mango(550,230,50,50);
mango8 = new Mango(610,235,50,50);
mango9 = new Mango(670,230,50,50);
mango10 = new Mango(725,220,50,50);
mango11 = new Mango(760,250,50,50);
mango12 = new Mango(500,260,50,50);
mango13 = new Mango(450,240,50,50)

stone = new Stone(70,390,50,50);

pluck = new Pluck(stone.body,{x:200, y:50})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

rect(ground.position.x,ground.position.y,800,15);


boy.display();

tree.display();

mango.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
mango11.display();
mango12.display();
mango13.display();

stone.display();

pluck.display();

 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    console.log("kajscnl")
}


