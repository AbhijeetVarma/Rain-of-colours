const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles=[];
var plinkos = [];
var divisions = [];

var border1,border2

var divisionsHeight = 300;

var ground 

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
    world = engine.world;

    ground = new Ground(240,790,480,20)

    for(var i=0;i<= width ; i = i + 80){
         
      divisions.push(new Dividers(i,height-divisionsHeight/2,5,divisionsHeight))

    }

    for(var j =25;j<= width-20;j = j+50){
          plinkos.push(new Plinkos(j,150))
    }
    for(var j =50;j<= width-20;j = j+50){
      plinkos.push(new Plinkos(j,50))
}
for(var j =25;j<= width-20;j = j+50){
  plinkos.push(new Plinkos(j,350))
}
for(var j =50;j<= width-20;j = j+50){
  plinkos.push(new Plinkos(j,250))
}

border1 = new Dividers(-10,400,5,800)
border2 = new Dividers(490,400,5,800)

}

function draw() {
  Engine.update(engine);
  background(0);  
  drawSprites();

  if(frameCount%30 === 0){
    particles.push(new Particles(random(100,380),10,10))
  }

  ground.display();
  for(var i=0;i<divisions.length;i++){
    divisions[i].display();
  }
  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  for(var i=0;i<particles.length;i++){
    particles[i].display();
  }
  

  
}