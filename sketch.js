const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform;
var hexagon, slingShot;
var gameState = "onSling";

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    square1 = new Square(700,320,70,70);
    square2 = new Square(920,320,70,70);
    rect1 = new Rect(810,260,400, PI/2);

    square3 = new Square(700,240,70,70);
    square4 = new Square(920,240,70,70);
    
    rect2 =  new Rect(810,180,400, PI/2);

    square5 = new Square(810,160,70,70);
    rect3 = new Rect(760,120,150, PI/7);
    rect4 = new Rect(870,120,150, -PI/7);
    rect5 = new Rect(870,120,150, -PI/7);

    hexagon = new Hexagon(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(hexagon.body,{x:200, y:50});
}

function draw(){

    background("black");

    Engine.update(engine);
    //strokeWeight(4);

    square1.display();
    square2.display();
    ground.display();
    rect1.display();

    square3.display();
    square4.display();
    rect2.display();

    square5.display();
    rect3.display();
    rect4.display();

    hexagon.display();
    platform.display();
    slingshot.display(); 
      
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}
function keyPressed(){
if(keyCode === 32){
    slingshot.attach(hexagon.body);
}
}



