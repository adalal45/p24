const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
var ball;
var ground;
function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  dustbin = new Dustbin(500, 600, 200, 100);
  paper = new Paper(50, 590, 40);
  ground = new Ground(400, 600, 800, 15);
  console.log(ball);
  //Create the Bodies Here.

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display();
  paper.display();
  ground.display();
  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, { x: 50, y: -50 });
  }
}
