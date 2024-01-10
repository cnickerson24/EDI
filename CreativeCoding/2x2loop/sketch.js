function setup() {//runs one time
createCanvas(windowWidth, windowHeight);
  background (255,0,0);
  fill ('yellow');
  strokeWeight (8);
}

function draw() {//ruins in a loop
  var num = 2;
  var sidelen = windowWidth/num;
  
    for (var y = 0; y < windowHeight; y= y +sidelen){
    for (var x = 0; x < windowWidth; x= x +sidelen){
      
     quad (
       x,y,
       x + sidelen, y,
       x + sidelen, y + 360,
       x, y +sidelen)
  
    }
}
}

function windowResized(){
  resizeCanvas (windowWidth, windowHeight);
}