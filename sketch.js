const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here
    text("Time: " + hour(), 300, 50)

}

async function getBackgroundImg(){

    var response = await fetch("https://worldclockapi.com/api/json/est/now")

    var responsejson = await response.json();

    var dateTime = responsejson.currentDateTime

    var hour = dateTime.slice(11,13)

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06 ){
        bg= "sunrise1.png";
    }
    else if(hour>=06 && hour<=08 ){
        bg= "sunrise2.png";
    }
    else if(hour>=23 && hour==0 ){
        bg= "sunrise10.png";
    }
    else if(hour==0 && hour<=03 ){
        bg= "sunrise11.png";
    }
    else{
        bg= "sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg)
}
