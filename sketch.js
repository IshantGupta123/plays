var cat,mouse,ground,catImg1,mouseImg1,groundImg1;
function preload() {
    //load the images here
catImg=loadImage("cat1.png","cat2.png");
mouseImg=loadImage("mouse1.png","mouse2.png");
groundImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 ground=createSprite(500,400,20,20);
ground.scale=1;
ground.addImage(groundImg);
mouse=createSprite(200,200,20,20);
mouse.scale=0.1;
mouse.addImage(mouseImg);
cat=createSprite(400,300,20,20)
cat.scale=0.1;
cat.addImage(catImg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here

}
