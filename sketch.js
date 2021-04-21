const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,score,text;
// var backgroundColor

score = 0;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,100,50,50);
    box2 = new Box(450,100,50,50);
    box3 = new Box(550,100,50,50);
    box4 = new Box(450,100,50,50);
    box5 = new Box(500,100,50,50);
    box6 = new Box(550,100,50,50);
    box7 = new Box(500,100,50,50);
    box8 = new Box(450,100,50,50);
    box9 = new Box(550,100,50,50);
    box10 = new Box(1000,00,50,50);
    box11 = new Box(950,00,50,50);
    box12 = new Box(1050,00,50,50);
    box13 = new Box(950,00,50,50);
    box14 = new Box(1000,00,50,50);
    box15 = new Box(1050,00,50,50);
    box16 = new Box(1000,00,50);
    box17 = new Box(950,00,50,50);
    box18 = new Box(1050,00,50,50);
    ground = new Ground(600,height,1200,40)
    ground1 = new Ground(500,300,200,10)
    ground2 = new Ground(1000,200,200,10)
    polygon = new Polygon(200,200);
    slingshot = new SlingShot(polygon.body,{x:200, y:50});
}   

function draw(){
    background(255);
    Engine.update(engine);
    fill("white");
    text("Score: " + score,750,40);
    
    
  
    ground.display();
    polygon.display();
    box1.display();
    fill("blue")
    box2.display();
    fill("yellow")
    box3.display();
    fill("pink")
    box4.display();
    fill("white")
    box5.display();
    fill("green")
    box6.display();
    fill("orange")
    box7.display();
    fill("cyan")
    box8.display();
    fill("yellow")
    box9.display();
    fill("pink")
    box10.display();
    fill("blue")
    box11.display();
    fill("yellow")
    box12.display();
    fill("pink")
    box13.display();
    fill("white")
    box14.display();
    fill("green")
    box15.display();
    fill("orange")
    box16.display();
    fill("cyan")
    box17.display();
    fill("yellow")
    box18.display();
    fill("pink")
    ground.display();
    ground1.display();
    ground2.display();
    
 drawSprites();
}

function mouseDragged(){
   
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
   
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(polygon.body);
    }
}
// function score (){
//    if (this.visibility<0 && this.visibility>=105){
//        score++;
//    }
// }



