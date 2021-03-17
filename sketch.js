const Engine=Matter.Engine
const Bodies=Matter.Bodies;
const World=Matter.World;

var world,ground,engine,ball;


function setup() {
  createCanvas(800,400);
    engine=Engine.create();
    world=engine.world;

    ground=Bodies.rectangle(200,350,400,20,{isStatic:true})
     World.add(world,ground);
     console.log(ground);

     ball=Bodies.circle(100,10,20,{restitution:1})
     World.add(world,ball)
      

  }

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);


       
}