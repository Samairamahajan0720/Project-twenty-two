var starImg,bgImg;
var star, starBody;
var fairy,fairyImg,fairySound;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
	fairySound = loadSound("sound/JoyMusic.mp3")
	

}

function setup() {
	createCanvas(800, 750);

	fairySound.play();

	fairy = createSprite(130,520);
	fairy.addAnimation("flyingFairy",fairyImg);
	fairy.scale = 0.3;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 ,{restitution:100, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  
  if (star.y > 440 && starBody.position.y > 440){
	Matter.Body.setStatic(starBody,true);
}


  drawSprites();
  keyPressed();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false)
	}
	
	if (keyDown(LEFT_ARROW))	{
		fairy.x = fairy.x - 10;
		return(false);
	}

	if (keyDown(RIGHT_ARROW)) {
		fairy.x = fairy.x + 10;
		return(false);
	}

}

