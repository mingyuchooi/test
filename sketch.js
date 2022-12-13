let ball;

function setup() {
  createCanvas(600, 400);
  ball = new Billiard();
}

function draw() {
  background(101);
  fill(0,100,150);
  rect(30,30,540, 340);
  ball.display();
  ball.update();
  ball.edges();
}
    
class Billiard {
  constructor(x, y, m) {
    this.pos = createVector(width/4, height/2);
    this.vel =p5.Vector.random2D();
    this.vel.mult(10);
    this.acc = createVector(0,0);
    this.mass = m;
    this.r = 15;
    }
  
  
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  display() {
    let c = (255);
    fill(c);
    ellipse(this.pos.x, this.pos.y, this.r * 2); 
  }

   edges() {
    if(this.pos.x >= width-this.r-30){
      this.pos.x = width-this.r-30;
      this.vel.x *=-1;
    } if(this.pos.x <= this.r+30){
      this.pos.x = this.r+30;
      this.vel.x *=-1;
    } if(this.pos.y >= height-this.r-30){
      this.pos.y = height-this.r-30;
      this.vel.y *=-1;
    } else if(this.pos.y <= this.r+30){
     this.pos.y = this.r+30;
     this.vel.y *=-1;
   }
 }
}