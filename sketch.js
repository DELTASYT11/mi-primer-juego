var path,boy,cash,diamonds,moneda,sword;
var pathImg,boyImg,cashImg,diamondsImg,monedaImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,monedaG,swordGroup;

//Game States 
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  monedaImg = loadImage("moneda.png");
  swordImg = loadImage("sword.png");
  gameoverImg=loadImage("gameOver.png");
  
}

function setup(){
  
  createCanvas(400,600);
//Mover fondo
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//crear sprite boy corriendo
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
monedaG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createMoneda();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(monedaG.isTouching(boy)) {
      monedaG.destroyEach();

       treasureCollection= treasureCollection + 150;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        gameOver=createSprite (185,50,170,1700);
        gameOver.addImage (gameoverImg);


        cashG.destroyEach();
         diamondsG.destroyEach();
         monedaG.destroyEach();
         swordGroup.destroyEach();
        

        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        monedaG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
        
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Tesoro: "+ treasureCollection,10,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createMoneda() {
  if (World.frameCount % 410 == 0) {
  var moneda = createSprite(Math.round(random(50, 350),40, 10, 10));
  moneda.addImage(monedaImg);
  moneda.scale=0.05;
  moneda.velocityY = 3;
  moneda.lifetime = 150;
  monedaG.add(moneda);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
