//create the components
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies; 

var engine, world;
var ground, b1,b2;

function setup() {
  createCanvas(800,400);
 //the physics engine code- computer's memory
engine= Engine.create();
world= engine.world;

console.log(box);
b1=new Box (200,300,50,50);
b2=new Box(240,100,50,100);
ground=new Ground(200,380,800,20);
}
function draw() {
  background(0);  
  Engine.update(engine);
b1.display();
b2.display();
ground.display();
}