var canvas;
var music;
var box1;
var box2;
var box3;
var box4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1=createSprite(100,570,100,20)
box1.shapeColor = "black"
box2=createSprite(300,570,100,20)
box2.shapeColor = "red"
box3=createSprite(500,570,100,20)
box3.shapeColor = "pink"
box4=createSprite(700,570,100,20)
box4.shapeColor = "blue"
ball = createSprite(400,300,30,30)
ball.shapeColor = "green"
ball.velocityX = 5;
ball.velocityY = 7;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
ball.bounceOff(edges)
if(ball.isTouching(box1)){
    ball.shapeColor = "black"
    ball.bounceOff(box1)
}
if(ball.isTouching(box2)){
    ball.shapeColor = "red"
    ball.bounceOff(box2)
}
if(ball.isTouching(box3)){
    ball.shapeColor = "pink"
    ball.bounceOff(box3)
}
if(ball.isTouching(box4)){
    ball.shapeColor = "blue"
    ball.bounceOff(box4)
}

    //add condition to check if box touching surface and make it box
    drawSprites()
}
