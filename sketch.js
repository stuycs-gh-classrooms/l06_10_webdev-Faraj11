function setup ()
{
  background (255);
  createCanvas (500, 500);

  let x=random (500);
  let y=random (500);
  let z=random (100);
  let a= random (100);

  let b= random (0, 256);
  let c= random (0, 256);
  let d= random (0, 256);

  while (x < 500)
  {
    rectangle (x, y, z, a, b, c, d);
    x=random (500);
    y=random (500);
    z=random (100);
    a= random (100);

    b= random (0, 250);
    c= random (0, 250);
    d= random (0, 250);
  }
}
function rectangle (x, y, z, a, b, c, d)
{
  fill (b, c, d);
  rect (x, y, z, a);
}
