img="";

function preload()
{
    img=loadImage("dog_cat.jpg")
}

function setup()
{
    canvas = createCanvas(640 ,420)
    canvas.center()
}

function draw()
{
    image(img ,0 ,0,640 ,420)
    fill("green")
    textSize(25)
    text("dog",45,79);
    noFill()
    stroke("green");
    rect(30,60,400,300)
    
}