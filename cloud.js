
class cloud {
  
  // the constructor contains the position (x & y coordinates) and size of the clouds. Inspiration for the shape of the clouds was take from: https://editor.p5js.org/jackiezen/sketches/rJEziNOR
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
    }
    

    // this function draws the clouds as per the constructor inputs
    drawCloud() {
    
    fill(105,105,105,130);
    strokeWeight(0.5);
    stroke(120);
    
      
    arc(this.x, this.y, 20 *(this.size), 2*(this.size), PI + TWO_PI, TWO_PI, OPEN);
    arc(this.x+ 10, this.y, 25 * (this.size), 45 * (this.size), PI + TWO_PI, TWO_PI, OPEN);
    arc(this.x+ 25, this.y, 25 * 2*(this.size), 35 * this.size, PI + TWO_PI, TWO_PI, OPEN);
    arc(this.x + 40, this.y, 30 * (this.size), 20 * (this.size), PI + TWO_PI, TWO_PI, OPEN); 
    arc(this.x + 40, this.y, 30 * (this.size), 20 * (this.size), PI, TWO_PI, OPEN);   
      arc(this.x + 40, this.y, 40 * (this.size), 10 * (this.size), 0, PI, OPEN); 
      noFill();
      noStroke();
      
  }
    // this function increases the size of the clouds and changes their colour.
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
  