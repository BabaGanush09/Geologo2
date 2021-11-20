const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hammer;
var rubber;
var iron;
var stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine=Engine.create();
    world=engine.world;
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(600,400);
    rubber = new Rubber(600,400,-80/2);
    iron = new Iron(600,450);
    stone = new Stone(600,450);
  
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    rubber.display();
    plane.display();
    hammer.display();
    iron.display();
    stone.display();

    
 
}