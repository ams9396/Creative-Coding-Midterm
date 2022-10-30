
class cloud {
  
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
    }
    
    drawCloud() {
    
    fill(105,105,105,130);
    strokeWeight(0.5);
    stroke(120);
    // ellipse(this.x, this.y, this.size, this.size)
      
    arc(this.x, this.y, 20 *(this.size), 2*(this.size), PI + TWO_PI, TWO_PI, OPEN);
    arc(this.x+ 10, this.y, 25 * (this.size), 45 * (this.size), PI + TWO_PI, TWO_PI, OPEN);
    arc(this.x+ 25, this.y, 25 * 2*(this.size), 35 * this.size, PI + TWO_PI, TWO_PI, OPEN);
    arc(this.x + 40, this.y, 30 * (this.size), 20 * (this.size), PI + TWO_PI, TWO_PI, OPEN); 
    arc(this.x + 40, this.y, 30 * (this.size), 20 * (this.size), PI, TWO_PI, OPEN);   
      arc(this.x + 40, this.y, 40 * (this.size), 10 * (this.size), 0, PI, OPEN); 
      noFill();
      noStroke();
      
  }
    
    enlargeCloud(){
  
      
           fill(200,200,200,random(150,220));
            strokeWeight(0.58);
            stroke(200);
            // this.x = this.x +70
            // this.y = this.y +120
            // this.size  = 7.5
           
       arc(this.x, 250, this.y, 20 * 2*(this.size), PI + TWO_PI, TWO_PI, OPEN);
    arc(this.x+ 10, this.y, 25 * (this.size), 45 * (this.size), PI + TWO_PI, TWO_PI, OPEN);
    arc(this.x+ 25, this.y, 25 * 2*(this.size), 35 * 5, PI + TWO_PI, TWO_PI, OPEN);
    arc(this.x + 40, this.y, 30 * (this.size), 20 * (this.size), PI + TWO_PI, TWO_PI, OPEN);
      arc(this.x + 40, this.y, 30 * (this.size), 20 * (this.size), 0, PI, OPEN); 
      arc(this.x + 40, this.y, 40 * (this.size), 10 * (this.size), PI, TWO_PI, OPEN); 
      noFill();
      noStroke();
    }
    
  }
  