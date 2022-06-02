let s;
let m;
let h;
let x;

function setup() {
    createCanvas (400, 400);
  background(255);
 // frameRate(int(1));
   s=second();
   m=minute();
   h=hour();
  fill(#D6CFCF);
}

function draw() {
    background(0);
  clockFace();
  drawHand();
  updateTime();
  
}

function timeToAngle ()
{

  //I combined the code for timeToAngle and drawHand because when I separated them,
  //the clock did not work properly and hands were frozen.
  
  //Code for the second hand
  //timeToAngle for seconds
  let s = map(second(), 0, 60, 0, (PI*2)) - (PI/2);
  
  //drawHand for seconds
  stroke(255,0,0);
  strokeWeight(1);
  line(width/2, height/2, width/2 + (115 * (cos(s))), height/2 + (115 * (sin(s))));

  //Code for the minute hand
  //timeToAngle for minutes
  let m = map(minute(), 0, 60, 0, (PI * 2)) - (PI/2); 
  
  //drawHand for minutes
  stroke(0,0,0);
  strokeWeight(3);
  line(width/2, height/2, width/2 + (85 * (cos(m))), height/2 + (85 * (sin(m))));

  //Code for the hour hand
  //timeToAngle for hours
  let h = map(hour(), 0, 24, 0, (PI*2) * 2) - (PI/2);
  
  //drawHand for hours
  stroke(0,0,0);
  strokeWeight(6);
  line(width/2, height/2, width/2 + (55 * (cos(h))), height/2 + (55 * (sin(h))));
}

function drawHand () 
{
  timeToAngle();
  //Code for drawHand is put in timeToAngle because the clock did not run properly
  //when the drawHand code was put here
}

function clockFace () {
  stroke(0, 0, 0);
  strokeWeight(1);
  fill (120,120,200);
  circle(width/2, height/2, 300);
  
  //Code for tickmarcks
  beginShape(POINTS);
  strokeWeight(5);
   x=0;
  for (int i = 0; i < 360; i+=30) {
  
    let t = map(i,0,360,0,(2*PI));
    let x = 200+ cos(t) * 130;          
    let y = 200+ sin(t) * 130;          
    vertex(x, y);
  }
  endShape();
}

function updateTime () {
  let s=second();
  let m=minute();
  let h=hour();
}
