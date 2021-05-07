const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;
var rock1
var sling1,sling2

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  boggie1=new boogie(250,200,50,50)
  boggie2=new boogie(350,200,50,50)
  boggie3=new boogie(450,200,50,50)

  rock1=new rock(700,330,75,75)

  sling1=new Slingshot(boggie1.body,boggie2.body)
  sling2=new Slingshot(boggie2.body,boggie3.body)


}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  boggie1.show()
  boggie2.show()  
  boggie3.show()

  rock1.show()

  sling1.show()
  sling2.show()
 var col1=Matter.SAT.collides(boggie3.body,rock1.body)
 if(col1.collided)
 {
   flag=1;
 }
 if(flag===1)
 {
   fill("blue");
   textSize("60");
   text("CRASH",299,29)
   //crashSound.play();
 }
  }

  function keyPressed()
  {
if(keyCode===RIGHT_ARROW)
{
Matter.Body.applyForce(boggie3.body,{x:boggie3.body.position.x,y:boggie3.body.position.y},{x:0.5,y:0})

//trainSound.play();
}

  }
  

  
