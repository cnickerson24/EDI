let gif;

function preload (){
gif=loadImage ('assets/CFinal.gif');
}


function setup() {//runs one time
createCanvas(windowWidth, windowHeight);
  background (255,0,0);
  fill ('yellow');
  strokeWeight (8);
}

function draw() {//ruins in a loop
  var num = 2;
  var sidelen = windowWidth/num;
  
    for (var y = 0; y < 2* windowHeight; y= y +sidelen){
    for (var x = 0; x < 2* windowWidth; x= x +sidelen){    
    image (gif,x,y,sidelen,sidelen);

function windowResized(){
  resizeCanvas (windowWidth, windowHeight);
}




