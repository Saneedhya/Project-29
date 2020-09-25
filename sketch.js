var polygon;
var slingshot;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,
block12,block13,block14,block15,block16;
var polygon_img;
var stand;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground = new Ground(600,height,1200,20);
  stand = new Ground(400,height,200,20);

//level one
block1 = new Block(120,275,30,40);
block2 = new Block(150,275,30,40);
block3 = new Block(180,275,30,40);
block4 = new Block(210,275,30,40);
block5 = new Block(240,275,30,40);
block6 = new Block(270,275,30,40);
block7 = new Block(300,275,30,40);

//level two
block8 = new Block(330,235,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11 = new Block(420,235,30,40);
block12 = new Block(450,235,30,40);

//level three
block13 = new Block(360,195,30,40);
block14 = new Block(390,195,30,40);
block15 = new Block(420,195,30,40);

//top
block16 = new Block(390,155,30,40);

//polygon holder with slings
polygon = Bodies.cirlcle(50,200,20);
World.add(world,polygon);

slingshot = new Slingshot(this.polygon,{x:100,y:200});

}

function preLoad(){
  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}




function draw() {
  background(255,255,255);  
  drawSprites();

stand.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
polygon.display();

}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

