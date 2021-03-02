var helicopterIMG, helicopterSprite, packageSprite ,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	
    boxposition = width/2-100;
    boxY=610;

    box3Sprite=createSprite(boxposition,boxY,20,100);
    box3Sprite.shapeColor=color("red")
    box3body = Bodies.rectangle(boxposition+20 ,boxY, 20,100, {isStatic:true} );
    World.add(world,box3body );

    box1Sprite=createSprite(boxposition+100,boxY+40,200,20);
	box1Sprite.shapeColor=color("red")
	boxbody = Bodies.rectangle(boxposition+100,boxY+45-20,200,20, {isStatic:true} );
	World.add(world, boxbody);

	box2Sprite=createSprite(boxposition+200 ,boxY,20,100);
	box2Sprite.shapeColor=color("red")
	box2Sprite = Bodies.rectangle(boxposition+200 ,boxY, 20,100, {isStatic:true} );
	World.add(world,box2Sprite );


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   
	Matter.Body.setStatic(packageBody, false)
  }
}



