
var r1 = 0;
var g1 = 255;
var b1= 0;
var x1 = (windowWidth-width)/2;
var y1 = (windowHeight-width)/2;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
 var cvs = createCanvas(1200,400);
  background(rgb(0,255,0));
  cvs.x = x1;
  cvs.y = y1;
}


function draw(){

  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so.
 let r2 = map(r1+mouseX,0,width,0,255,true); 
 let g2 = map(g1+mouseX,0,width,0,255,true);
 let b2 = map(b1+mouseX,0,width,0,255,true);

  // Pass the values to the background() function you have learnt previously.
  background(rgb(r2,g2,b2));
  // Create an ellipse that will move around with you mouse about the X axis.
  fill('#40E0D0');
 let x1 = map(mouseX,0,width,0,1200,true);
 let y1 = map(mouseY,0,height,0,400,true);
  ellipse(x1,y1,50,50,null,0,360);
  // Remember to fill the canvas with white paint before creating the ellipse.
}