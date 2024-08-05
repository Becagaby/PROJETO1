function setup() {
  createCanvas(1000, 800)
  background("pink");
}

function draw() {
  fill("purple");
  stroke("black");
if(mouseIsPressed)
  circle(mouseX,mouseY,15,15);
}
