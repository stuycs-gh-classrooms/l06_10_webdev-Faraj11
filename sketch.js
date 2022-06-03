let s;
let m;
let h;
let x;
function setup() {
  createCanvas (400, 400,0);
  background(255);
  s=second();
  m=minute();
  h=hour();
}

function draw() {
  background(0);
  clockFace();
  drawHand();
  updateTime();
  
}

function timeToAngle ()
{
  let s = map(second(), 0, 60, 0, (PI*2)) - (PI/2);

  stroke(255,0,0);
  strokeWeight(1);
  line(width/2, height/2, width/2 + (115 * (cos(s))), height/2 + (115 * (sin(s))));

  let m = map(minute(), 0, 60, 0, (PI * 2)) - (PI/2); 
  
  stroke(0,0,0);
  strokeWeight(3);
  line(width/2, height/2, width/2 + (85 * (cos(m))), height/2 + (85 * (sin(m))));

  let h = map(hour(), 0, 24, 0, (PI*2) * 2) - (PI/2);

  stroke(0,0,0);
  strokeWeight(6);
  line(width/2, height/2, width/2 + (55 * (cos(h))), height/2 + (55 * (sin(h))));
}

function drawHand () 
{
  timeToAngle();
}

function clockFace () {
  stroke(0, 0, 0);
  strokeWeight(1);
  fill (120,120,200);
  circle(width/2, height/2, 300);

  beginShape(POINTS);
  strokeWeight(5);
   x=0;
  for (var i = 0; i < 360; i+=30) {
  
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
